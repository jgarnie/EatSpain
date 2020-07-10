<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\User;
use App\Order;
use App\Category;


class HomePageController extends Controller
{
    public function index()
    {
        return view('/dashboard/dashboard');
    }
}
