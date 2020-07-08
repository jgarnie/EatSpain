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
Route::get('/products/product/{product_id}', 'ApiController@productDetail')->name('product.detail');

Route::get('/categories/all', 'ApiController@categoryAll')->name('categoryAll');

Route::get('products/new', 'ApiController@newest')->name('newitems');



Route::get('/carts', 'CartController@checkToken')->name('carts.checkToken');
Route::get('/carts/{token}', 'CartController@find')->name('carts.find');
Route::post('/carts/{token}', 'CartController@add')->name('carts.add');
Route::delete('/carts/{token}', 'CartController@remove')->name('carts.remove');

// Route::post('/carts/new', 'CartController@add')->name('cart.add'); 
// Route::post('/carts/', 'CartController@create')->name('cart.create');

Route::get('/searchBar', 'ApiController@searchBar')->name('search.results');
