<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;
use App\OrderDetail;

class CartController extends Controller
{

    private function createToken($user_agent)
    {
        do {
            $token = md5(time() . mt_rand(1, 1000) . $user_agent);
        } while (Cart::where("token", $token)->exists());
        return $token;
    }

    public function checkToken(Request $request)
    {
        $token = $request->input("token");
        $cart = Cart::where("token", $token)->with("products")->first();

        if (empty($cart)) {
            //create a new token
            $new_token = $this->createToken($request->header('User-Agent'));
            $cart = new Cart;
            $cart->token = $new_token;
            $cart->save();
        } else {
            //update existing token
            $cart->updated_at = time();
            $cart->save();
        }
        return $cart;
    }

    public function find($token)
    {
        $cart = Cart::where("token", $token)->with(["products", "orderDetail"])->first();
        return $cart;
    }

    public function add(Request $request)
    {
        $token = $request->input("token");
        $product_id = $request->input("productId");

        $cart = Cart::where("token", $token)->with("products")->first();

        $item = $cart->products->firstWhere("id", $product_id);

        if ($item) {
            $current_count = $item->pivot->count;
            $new_count = $current_count + $request->input('count');
            $cart->products()->updateExistingPivot($product_id, ["count" => $new_count]);
        } else {
            $cart->products()->attach($product_id, ["count" => $request->input('count')]);
        }

        $cart->load('products');
        return $cart;
    }

    public function updateCount(Request $request)
    {
        $token = $request->input("token");
        $cart = Cart::where("token", $token)->with("products")->first();
        $cart->products()->updateExistingPivot($request->input("productId"), ["count" => $request->input('count')]);
        $cart->load('products');
        return $cart;
    }

    public function remove(Request $request)
    {
        $token = $request->input("token");
        $cart = Cart::where("token", $token)->with("products")->first();
        $cart->products()->detach($request->input("productId"));
        $cart->load('products');
        return $cart;
    }

    public function checkout(Request $request)
    {
        $token = $request->input("token");
        $cart = Cart::where("token", $token)->with("orderDetail")->first();
        $order_detail = OrderDetail::where("cart_id", $cart->id)->first();

        if ($order_detail == NULL) {
            $order_detail = new OrderDetail;
            $order_detail->cart_id = $cart->id;
        }

        $order_detail->first_name = $request->input("firstName") ?? $order_detail->first_name;
        $order_detail->last_name = $request->input("lastName") ?? $order_detail->last_name;
        $order_detail->email = $request->input("email") ?? $order_detail->email;
        $order_detail->address = $request->input("address") ?? $order_detail->address;
        $order_detail->city = $request->input("city") ?? $order_detail->city;
        $order_detail->zip = $request->input("zip") ?? $order_detail->zip;
        $order_detail->offers_email = $request->input("offers") ?? $order_detail->offers_email;
        $order_detail->terms_and_conditions = $request->input("terms") ?? $order_detail->terms_and_conditions;
        $order_detail->payment_method = $request->input("paymentMethod") ?? $order_detail->payment_method;
        $order_detail->total = $request->input("total") ?? $order_detail->total;
        $order_detail->order_status = $request->input("orderStatus") ?? $order_detail->order_status;

        $order_detail->save();
        $cart->load("orderDetail");
        return $cart;
    }
}
