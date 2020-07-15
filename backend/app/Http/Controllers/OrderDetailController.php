<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\OrderDetail;
use App\Cart;

class OrderDetailController extends Controller
{
    public function index()
    {
        if(isset($_GET['status'])) {

            $orders = OrderDetail::where('order_status','=','ready')->with('cart.products')->get();

            $hide = true;
        
        } else {

            $orders = OrderDetail::where('order_status','=','ordered')->with('cart.products')->get();

            $orders = OrderDetail::where('order_status','=','ordered')->with('cart.products')->get();

            $hide = false;

        }
        return view('orders/orders',compact('orders','hide'));

    }
    public function orders()
    {//prepared for the API
        $orders = OrderDetail::where('order_status','=','ordered')->with('cart.products')->get();

        return [
            'orders'=>$orders
        ];
    }
    public function update(Request $request, $id)
    {//changes the state of the order
       
        
        $order = OrderDetail::findorfail($id);
        
        $status = $request->input('order_status');
        $order->order_status = $request->input('order_status');
        
        $order->save();

        Mail::to($order->email)->send(new InvoiceEmail($order));

        return redirect(action('OrderDetailController@index'));
        
    }

  
}
