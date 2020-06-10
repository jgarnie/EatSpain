<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class ItemController extends Controller
{
    public function index(){

        $items = Item::all();
        return view('items',compact('items'));
    }
    public function show($id){

        $item = Item::findOrFail($id);
      
        return view('/show',compact('item'));
    }
    public function create(){

        return view('/create');
    }

    public function store(Request $request){
        $newItem= new Item;
        $newItem->name = $request->input('name');
        $newItem->description = $request->input('description');
        $newItem->price = $request->input('price');
        $newItem->image = $request->input('image');
        $newItem->category_id = $request->input('category_id');
        $newItem->discount = $request->input('discount');
        $newItem->save();

        return redirect('/items');

    }
    public function delete(Request $request){
        $delId= $request->id;
        $valueDie = Item::findOrFail($delId);
        $valueDie->delete();
        return redirect('/items');
    }
    public function edit($id){
        $item = Item::findOrFail($id);
        
        return view('/edit',compact('item'));
    }
    public function update($id,Request $request){
       
        $editId= Item::findOrFail($id);
        
       
        $editId->name = $request->input('name');
        $editId->description = $request->input('description');
        $editId->price = $request->input('price');
        $editId->image = $request->input('image');
        $editId->category_id = $request->input('category_id');
        $editId->discount = $request->input('discount');
        $editId->save();
        return redirect('/items');

    }
}
