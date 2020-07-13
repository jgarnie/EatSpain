
@extends('layouts.layout', [
    'title' => 'Products'
])

@section('content')

@if (Session::has('success_message'))
    
    <div class="alert alert-success">
        {{ Session::get('success_message') }}
    </div>

@endif



<a href="/create"><button>create new Item</button></a>

<div class="productsWrapper">
    @foreach($items as $item)
        <div class='productsWrapper__productCard'>
            <h2>{{$item->name}}</h2>
            <img class="productsWrapper__image" src="/images/uploads/{{$item->image}}" alt="{{$item->name}}">
            
                @if($item->discount)

                    <p class="productsWrapper__discount">discount: {{$item->discount}} %</p>
                    <?php
                      $discount_Amt = $item->price*$item->discount/100;
                      $new_total = $item->price-$discount_Amt;
                    ?>
                    <p>before discount {{$item->price}} Eur</p>
                    <p>Now {{$new_total}} Eur</p>
                @else
                <p>{{$item->price}}Eur</p>
                @endif

            <a href="/items/{{$item->id}}"><button>Details</button></a>

        </div>

    @endforeach
</div>
@endsection