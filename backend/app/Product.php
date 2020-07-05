<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;
use App\Cart;

class Product extends Model
{
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function carts(){
        return $this->belongsToMany(Cart::class);
    }
}
