<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvoiceEmail;

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

//Orders
Route::get('/orders','OrderDetailController@index')->name('orders.pending');

Route::post('/orders/{id}','OrderDetailController@update')->name('orders.update');







Route::prefix('admin')->group(function(){

Auth::routes();
});//to have the url admin/login

Route::get('/home', 'HomeController@index')->name('home');


Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function(){

    Route::resource('/users', 'UsersController',['except'=>['show','create','store']]);
});
//after route name to hide urls should be: ->middleware('can:admin'), has been defined on app\Providers\AuthServiceProvider.php as a gate


Route::get('/send-notification', function(){
    $user = User::first();
    $user->notify(new ShippedShop());
});


// Route::get('/send-email', function(){
//testing purposes email

//     $order= App\OrderDetail::findOrFail(1);
//     //should be placed in the controller
//     //Mail::to('test@app.cz')->send(new InvoiceEmail());
//     //dd('email sent');
//     return view('/emails/invoice-email',compact('order'));

// });