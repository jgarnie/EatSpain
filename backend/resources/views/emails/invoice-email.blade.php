<h1>Eat Spain</h1>

<h2>Your order is on his way</h2>

@foreach($order->cart->products as $product)

{{$product->id}}
{{$product->name}}
<p>PRICE {{$product->price}}</p>

<P>count {{$product->pivot->count}}</P>

<?php

    $subtotal=$product->price*$product->pivot->count;

?>

<p>sub {{$subtotal}}</p>

<br>

@endforeach
<p>total</p>
{{$order->total}}


