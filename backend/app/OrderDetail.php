<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cart;

class OrderDetail extends Model
{
    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }
}
