@extends('layouts.layout', [
    'title' => 'Orders'
])

@section('content')

@if($hide)
<h1>Delivered Orders</h1>
@else
<h1>New Orders</h1>
@endif
<button><a href="/orders?status=ordered">Delivered orders</a></button>
<button><a href="/orders">New orders</a></button>





@foreach($orders as $order)
{{$order->first_name}}
{{$order->last_name}}
{{$order->address}}
{{$order->city}}
{{$order->zip}}
{{$order->total}}


{{$order->cart->id}}
<br>
    @foreach($order->cart->products as $product)
<div>
        {{$product->name}}

        {{$product->price}}

        {{$product->pivot->count}}
   
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

@endsection
<!-- <div id="root"></div>
removed, left for improvement
<script src="/js/app.js"></script> -->
