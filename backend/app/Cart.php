<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;
use App\OrderDetail;

class Cart extends Model
{
    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot(['count'])->with("category");
    }

    public function orderDetail()
    {
        return $this->hasOne(OrderDetail::class);
    }
}
