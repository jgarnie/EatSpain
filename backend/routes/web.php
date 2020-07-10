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

Route::get('/items', 'ProductController@index')->name('products.index');
Route::get('/items/{id}', 'ProductController@show');
Route::get('/create', 'ProductController@create')->name('products.create');
Route::post('/items/create', 'ProductController@store')->name('products.store');
Route::post('/items/delete', 'ProductController@delete');
Route::get('/item/{id}/edit','ProductController@edit');
Route::post('/items/{id}/update', 'ProductController@update');
Route::post('/items/search','ProductController@searchBar')->name('products.searchBar');

//api for the fetching frontend /api/products

//dashboard
Route::get('/admin/dashboard','HomePageController@index')->name('dashboard');



Route::prefix('admin')->group(function(){

Auth::routes();
});//to have the url admin/login

Route::get('/home', 'HomeController@index')->name('home');


Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function(){

    Route::resource('/users', 'UsersController',['except'=>['show','create','store']]);
});
//after route name to hide urls should be: ->middleware('can:admin'), has been defined on app\Providers\AuthServiceProvider.php as a gate