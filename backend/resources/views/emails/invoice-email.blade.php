<h1>we dont like styling!!</h1>

<h2>but Your order is on his way, :)</h2>
<p>We only wanted to test this functionality, we would be very surprised if you are one of those who likes to read spam emails!!</p>

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


