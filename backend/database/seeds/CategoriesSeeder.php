<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            
     



        DB::table('categories')->truncate();

        $source_file = storage_path('categories.json');

        $data = json_decode(file_get_contents($source_file));

        foreach($data as $item){

        $category = new App\Category;
        
        $category->name = $item->name;
        $category->description = $item->description;
        
        $product->save();
        
    }
    }
}
