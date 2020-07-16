@extends('layouts.layout', [
    'title' => 'Orders'
])
    @section('content')

    <div class="orders__wrapper">

            @if($hide)
                <h1>Delivered Orders</h1>
            @else
                <h1>New Orders</h1>
            @endif
            
        <div class="orders__wrapper__links">

            <button><a href="/orders">New orders</a></button>
            <button><a href="/orders?status=ordered">Delivered orders</a></button>

        </div>
        
            <div class="orders__wrapper__details">

                @foreach($orders as $order)
                    <div class="orders__wrapper__details__contact">
                            <h3>Order:{{$order->id}}</h3>

                            <div><span>Total </span>{{$order->total}} Eur</div>

                            <div><span>Name: </span>{{$order->first_name}}, {{$order->last_name}}</div>
                            
                            <div><span>Address: </span>{{$order->address}}, {{$order->city}}, {{$order->zip}}</div>

                            <div><span>Email: </span>{{$order->email}}</div>
                            
                    </div>
                    
                    <div class="orders__wrapper__details__head">
                        <div class="orders__wrapper__details__list--name">
                            <span>Product</span>
                        </div>
                        <div class="orders__wrapper__details__list--price">
                            <span>Price</span>
                        </div>
                        <div class="orders__wrapper__details__list--count">
                            <span>Nº of Products</span>
                        </div>
                    </div>

                    @foreach($order->cart->products as $product)
                    
                        <div class="orders__wrapper__details__list">

                                <div class="orders__wrapper__details__list--name">{{$product->name}}</div>

                                <div class="orders__wrapper__details__list--price">{{$product->price}}</div>

                                <div class="orders__wrapper__details__list--count">{{$product->pivot->count}}</div>
                                
                        </div>

                    @endforeach

                    @if(!$hide)
                            <form action="/orders/{{$order->id}}" method="post">
                            @csrf
                                <input type="hidden" name="order_status" value="ready">
                                <button type="submit">Deliver</button>
                            </form>
                    @endif

                @endforeach
            </div>    
                
    </div>
    @endsection


<!-- <div id="root"></div>
removed, left for improvement
<script src="/js/app.js"></script> -->
