@extends('layouts.layout', [
    'title' => 'Edit product'
])

@section('content')




 @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
 @endforeach

@if($item->id)
<form method="post" action="/items/{{$item->id}}/update" enctype="multipart/form-data">

@else
<form method="post" action="{{ route('products.store') }}" enctype="multipart/form-data">
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
        <input type="file" name="image" value="{{ old('image', $item->image) }}">
        @if($item->id)
        <img src="/images/uploads/{{$item->image}}" alt="{{ $item->name }}">
        @endif
    </div>
    <div>
        <label>category</label>
        <select name="category_id">

        @foreach($categories as $category)
            @if($item->category_id == $category->id)
                <option selected value="{{$category->id}}">{{$category->name}}</option>
            @elseif($item->category_id != $category->id)
                <option value="{{$category->id}}">{{$category->name}}</option>
            @endif
        @endforeach

        </select>
       
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
