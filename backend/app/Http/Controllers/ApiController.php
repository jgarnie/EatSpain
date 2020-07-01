<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Category;

class ApiController extends Controller
{
    public function apiAll(Request $request){
        $category = $request->input("category");

        if(isset($category)){
            $items = Product::where('category_id','=',$category)->get();  
        }else{
            $items = Product::orderByRaw('RAND()')->get();
        }
        return [
            'products'=>$items,
        ];
    }
    public function categoryAll(){

        $items = Category::all();

        return [
            'products'=>$items,
        ];
    }
    public function newest(){
        //shows the last 10 products added to DB
        $items = Product::orderBy('created_at', 'desc')->take(10)->get();

        return [
            'products'=>$items,
        ];
    }
}
