<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function index(){

        $items = Product::all();

        return view('items',compact('items'));
    }
    public function show($id){

        $item = Product::findOrFail($id);
      
        return view('/show',compact('item'));
    }
    public function create(){

        return view('/create');
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

        return redirect('/items');

    }
    public function delete(Request $request){
        $delId= $request->id;
        $valueDie = Product::findOrFail($delId);
        $valueDie->delete();
        return redirect('/items');
    }
    public function edit($id){
        $item = Product::findOrFail($id);
        
        return view('/edit',compact('item'));
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
        return redirect('/items');

    }
    public function apiAll(){

        $items = Product::all();

        return [
            'products'=>$items,
        ];




    }
}
