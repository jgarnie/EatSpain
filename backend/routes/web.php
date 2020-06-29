<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/items', 'ProductController@index');
Route::get('/items/{id}', 'ProductController@show');
Route::get('/create', 'ProductController@create');
Route::post('/items/create', 'ProductController@store');
Route::post('/items/delete', 'ProductController@delete');
Route::get('/item/{id}/edit','ProductController@edit');
Route::post('/items/{id}/update', 'ProductController@update');
//api for the fetching frontend /api/products


Route::get('/api/all', 'ProductController@apiAll')->name('apiAll');
Route::get('/api/food', 'ProductController@apiAll')->name('apiFood');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
