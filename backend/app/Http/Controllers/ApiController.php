<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Category;

class ApiController extends Controller
{
    public function apiAll(Request $request)
    {
        $category = $request->input("category");

        if (isset($category)) {
            $items = Product::where('category_id', '=', $category)->get();
        } else {
            $items = Product::orderByRaw('RAND()')->get();
        }
        return [
            'products' => $items,
        ];
    }
    public function categoryAll()
    {

        $categories = Category::all();

        return $categories;
    }
    public function newest(Request $request)
    {
        //shows the last 10 products added to DB
        $limit = $request->input('limit');
        if (isset($limit)) {
            $items = Product::orderBy('created_at', 'desc')->take(10)->get();
        } else {
            $items = Product::orderBy('created_at', 'desc')->get();
        }

        return [
            'products' => $items,
        ];
    }
    public function searchBar(Request $request)
    {

        $name = $request->input('name');

        $items = Product::where('name', 'like', '%' . $name . '%')->get();

        return [
            'products' => $items,
        ];
    }
}
