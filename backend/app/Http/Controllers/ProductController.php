<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Category;

class ProductController extends Controller
{
    public function index(){

        $items = Product::orderByRaw('RAND()')->get();

        return view('items',compact('items'));
    }
    public function show($id){

        $item = Product::findOrFail($id);
      
        return view('/show',compact('item'));
    }
    public function create(){

        $item = new Product;

        return view('/edit',compact('item'));
        //create view changed by edit
    }

    public function store(Request $request){

        $newProduct= new Product;
        $newProduct->name = $request->input('name');
        $newProduct->description = $request->input('description');
        $newProduct->price = $request->input('price');
        $newProduct->image = $request->input('image');
        $newProduct->category_id = $request->input('category_id');
        $newProduct->discount = $request->input('discount');
        $newProduct->save();
       
        session()->flash('success_message', 'The product was successfully saved!');

        return redirect(action('ProductController@show',$newProduct->id ));
       
    }
    public function delete(Request $request){
        $delId= $request->id;
        $valueDie = Product::findOrFail($delId);
        $valueDie->delete();
        session()->flash('success_message', 'product deleted succesfully!');

        return redirect('/items');
    }
    public function edit($id){
        $item = Product::with('category')
        ->findOrFail($id);
        $category = Category::all();
        //return $item;
        return $category;
        return view('/edit',compact('item','category'));
    }
    public function update($id,Request $request){
       
        $editId= Product::findOrFail($id);
        
        $editId->name = $request->input('name');
        $editId->description = $request->input('description');
        $editId->price = $request->input('price');
        $editId->image = $request->input('image');
        $editId->category_id = $request->input('category_id');
        $editId->discount = $request->input('discount');
        $editId->save();
        
        session()->flash('success_message', 'product modified succesfully!');

        return redirect(action('ProductController@index'));

    }
    
}
