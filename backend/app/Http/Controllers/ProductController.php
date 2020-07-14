<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Category;

class ProductController extends Controller
{
    public function index(){

        $items = Product::orderby('name','desc')->paginate(15);
      
        return view('items',compact('items'));
    }
    public function show($id){

        $item = Product::findOrFail($id);
        $category = Category::findOrFail($item->category_id);
        
        return view('/show',compact('item','category'));
    }
    public function create(){

        $item = new Product;
        $categories = Category::All();
   
        return view('/edit',compact('item','categories'));
        //create view changed by edit
    }

    public function store(Request $request){
        
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|string|between:0,10',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id' => 'required|numeric|between:0,100',
            'discount' => 'nullable|numeric|between:0,10',
        ], [
            'name.required' => 'That number is outside of bounds.',
            'description.required' => 'A review without a text does not make sense, love.',
            'image.required' => 'accepted formats jpeg,png,jpg,gif,svg|max:2048',
            'category_id.required' => 'category is required',
            'price.max.required' => 'price is required'
        ]);
        $newFileName = md5(time()) . '.' . $request->file('image')->extension();
        $request->file('image')->move(public_path('images/uploads'), $newFileName);


        $newProduct= new Product;
        $newProduct->name = $request->input('name');
        $newProduct->description = $request->input('description');
        $newProduct->price = $request->input('price');
        $newProduct->image = $newFileName;
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
        $categories = Category::All();

        return view('/edit',compact('item','categories'));
    }
    public function update($id,Request $request){
        
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|string|between:0,10',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id' => 'required|numeric|between:0,100',
            'discount' => 'nullable|numeric|between:0,10',
        ], [
            'name.required' => 'That number is outside of bounds.',
            'description.required' => 'A review without a text does not make sense, love.',
            'image.max.required' => 'valid formats jpeg,png,jpg,gif,svg, max size 2MB',
            'category_id.required' => 'category is required and must be number!',
            'price.max.required' => 'price is required'
        ]);

        $editId= Product::findOrFail($id);
        $newFileName = md5(time()) . '.' . $request->file('image')->extension();
        $request->file('image')->move(public_path('images/uploads'), $newFileName);

        $editId->name = $request->input('name');
        $editId->description = $request->input('description');
        $editId->price = $request->input('price');
        $editId->image = $newFileName;
        $editId->category_id = $request->input('category_id');
        $editId->discount = $request->input('discount');
        $editId->save();
        $itemid = $id;
        session()->flash('success_message', 'product modified succesfully!');

        return redirect(action('ProductController@show',$itemid));

    }
    public function searchBar(Request $request){
        $name = $request->input('name');

        $items = Product::where('name','like','%'.$name.'%')->paginate(15);
        
        return view('/items', compact('items'));
    }
}
