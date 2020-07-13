<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;
use App\OrderDetails;

class Cart extends Model
{
    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot(['count'])->with("category");
    }

    public function orderDetails()
    {
        return $this->hasOne(OrderDetails::class);
    }
}
