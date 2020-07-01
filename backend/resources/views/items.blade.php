
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


@foreach($items as $item)
<div>
    <h2>{{$item->name}}</h2>

    <p>{{$item->description}}</p>
    <p>{{$item->price}}Eur</p>
            
    <a href="/items/{{$item->id}}"><button>Details</button></a>

</div>

@endforeach

@endsection