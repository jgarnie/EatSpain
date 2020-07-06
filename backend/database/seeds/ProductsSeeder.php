<?php

use Illuminate\Database\Seeder;
use App\Product;
class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    
    DB::table('products')->truncate();

        $source_file = storage_path('data.json');

        $data = json_decode(file_get_contents($source_file));

        foreach($data as $item){

        $product = new App\Product;
        
        $product->name = $item->name;
        $product->description = $item->description;
        $product->image = $item->image;
        $product->category_id = $item->category_id;
        $product->price = $item->price;
        $product->discount = $item->discount;
        $product->quantity = $item->quantity;
        $product->times_sold = $item->times_sold;

        $product->save();
        
    }

    
    
    
    
   
   
    }
}
