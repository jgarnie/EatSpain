<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Category;

class ApiController extends Controller
{
    public function apiAll()
    {
       //$items = Product::all()->paginate($_GET['limit'])->get();
      
            if(isset($_GET['page'])){
                $items = Product::orderby('discount','desc')->paginate(10);
            }else{
                $items = Product::orderByRaw('RAND()')->get();
            }
        
            return [
                'products' => $items,
            ];
    }

    public function productDetail($product_id)
    {
        $product = Product::findOrFail($product_id);
        return $product;
    }
    public function categoryAll()
    {
        //&page=1 to send several values in the url
        //testing, working $categories = Product::where('category_id','=',$_GET['category'])->orderByRaw('RAND()')->get();
        
        if(isset($_GET['name'])){
            
            $category = Category::where('name','=',$_GET['name'])->get();

            $categories = Product::where('category_id','=',$category[0]->id)->orderby('discount','desc')->paginate(10);
//->orderByRaw('RAND()')
        }else{
            $categories = Category::all();
        }
      

        return $categories;
    }
    public function newest(Request $request)
    {
        //shows the last 10 products added to DB
        $limit = $request->input('limit');
        if (isset($limit)) {
            $items = Product::orderBy('created_at', 'desc')->take($limit)->get();
        } else {
            $items = Product::orderBy('created_at', 'desc')->get();
        }

        return [
            'products' => $items,
        ];
    }
    public function searchBar(Request $request)
    {

        $query = $request->input('query');

        $items = Product::where('name', 'like', '%' . $query . '%')->get();

        return [
            'products' => $items,
        ];
    }
}
