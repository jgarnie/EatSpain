<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products/all', 'ApiController@apiAll')->name('apiAll');

Route::get('/categories/all', 'ApiController@categoryAll')->name('categoryAll');

Route::get('products/new', 'ApiController@newest')->name('newitems');

Route::get('/carts/cart', 'CartController@find')->name('cart.find');
Route::post('/carts/cart', 'CartController@add')->name('cart.add');
Route::get('/searchBar', 'ApiController@searchBar')->name('search.results');