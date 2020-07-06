<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;


class CartController extends Controller
{
     public function find(Request $request) {
        $token= $request->input("token");
        $cart = Cart::where("token",$token)->with("products")->get();
        return $cart;
    }

    public function add(Request $request) {
        $token = $request->input("token");
        $cart = Cart::where("token",$token)->with("products")->get();
        return [
            "response"=>"ok"
        ];
    }
}
