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
        $cart = Cart::where("token", $token)->with("products")->get();
        $cart->products()->attach($request->input("product_id"), ["count" => $request->input('count')]);
        return [
            "cart" => $cart,
            "response" => "ok"
        ];
    }

    public function updateCount(Request $request)
    {
        $token = $request->input("token");
        $cart = Cart::where("token", $token)->with("products")->get();
        $cart->products()->updateExistingPivot($request->input("product_id"), ["count" => $request->input('count')]);
    }

    public function remove(Request $request)
    {
        $token = $request->input("token");
        $cart = Cart::where("token", $token)->with("products")->get();
        $cart->products()->detach($request->input("product_id"));
    }
}
