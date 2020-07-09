<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;


class CartController extends Controller
{

    private function createToken($user_agent)
    {
        //create token here
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
        $cart = Cart::where("token", $token)->with("products")->first();
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
}
