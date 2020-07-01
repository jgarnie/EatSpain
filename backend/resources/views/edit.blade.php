@extends('layouts.layout', [
    'title' => 'Edit product'
])

@section('content')

@if(($item->id))
<img src="{{$item->image}}" alt="rice image">

@endif
{{--
<!-- 
{{$item->id}}
<img src="{{$item->image}}" alt="" srcset="">url to img {{$item->image}}<br>
{{$item->name}}<br>
{{$item->price}}<br>
{{$item->description}}<br>
 -->--}}


 @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
 @endforeach

@if($item->id)
<form method="post" action="/items/{{$item->id}}/update">

@else
<form method="post" action="{{ route('products.store') }}">
@endif


    @csrf

    <div>
        <label>name</label>
        <input type="text" name="name" value="{{ old('name', $item->name) }}">
        @if($item->id)
            <p>current name: {{$item->name}}</p>
        @endif
    </div>
    <div>
        <label>description</label>
        <input type="textarea" name="description" value="{{ old('description', $item->description) }}">
        @if($item->id)
            <p>current description: {{$item->description}}</p>
        @endif
    </div>
     <div>
        <label>image</label>
        <input type="text" name="image" value="{{ old('image', $item->image) }}">
        @if($item->id)
            <p>img url: {{$item->image}}</p>
        @endif
    </div>
    <div>
        <label>category</label>
        <input type="text" name="category_id" value="{{ old('category_id', $item->category_id) }}">
        @if($item->id)
            <p>category name: {{$item->category->name}}</p>
        @endif
    </div>
    <div>
        <label>price</label>
        <input type="text" name="price" value="{{ old('price', $item->price) }}">
        @if($item->id)
            <p>current price: {{$item->price}} Eur</p>
        @endif
    </div>
    <div>
        <label>disount to apply in %</label>
        <input type="text" name="discount" value="{{ old('discount', $item->discount) }}">
    
       
        
    </div>
    <input type="submit">
    
</form>
<a href="/items"><button>back</button></a>


@endsection
