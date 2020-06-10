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
Route::get('/items', 'ItemController@index');
Route::get('/items/{id}', 'ItemController@show');
Route::get('/create', 'ItemController@create');
Route::post('/items/create', 'ItemController@store');
Route::post('/items/delete', 'ItemController@delete');
Route::get('/item/{id}/edit','ItemController@edit');
Route::post('/items/{id}/update', 'ItemController@update');

