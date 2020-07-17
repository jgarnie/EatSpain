
@extends('layouts.layout', [
    'title' => 'Products'
])

@section('content')

    
    

        @if (Session::has('success_message'))
<div class="alertmesg__wrapp">
    <div class="alertmesg__wrapp__inner">
        {{ Session::get('success_message') }}
    </div>
</div>
        @endif
   


<div class="productsWrapper">
    @foreach($items as $item)
        <div class='productsWrapper__productCard'>
            <h2>{{$item->name}}</h2>
            <img class="productsWrapper__productCard__image" src="/images/uploads/{{$item->image}}" alt="{{$item->name}}">
            
            <div class="productsWrapper__productCard__bottom">
                <p>{{$item->price}} Eur</p>

                <a href="/items/{{$item->id}}">Details</a>
            </div>
        </div>

    @endforeach
</div>

  
    <div class="items__pagination">
        {{$items->links()}}
    </div>
    

@endsection