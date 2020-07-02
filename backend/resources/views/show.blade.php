@extends('layouts.layout', [
    'title' => 'Publisher management'
])

@section('content')

@if (Session::has('success_message'))
    
    <div class="alert alert-success">
        {{ Session::get('success_message') }}
    </div>

@endif



<h1>{{$item->name}}</h1>

<p>{{$item->id}}</p>

<p>{{$item->description}}</p>

<p>{{$item->price}}Eur</p>

<p>{{$category->name}}</p>
<img src="{{$item->image}}" alt="" srcset="">
<br>
<a href="/items"><button>back</button></a>
<a href="/item/{{$item->id}}/edit"><button>edit</button></a>
<form action="/items/delete" method="post">
    @csrf
    <input type="hidden" name="id" value="{{$item->id}}">
    <label>delete
    <input type="submit" onclick="return confirm('Are you sure to delete {{$item->name}}?')"></label>
</form>


@endsection





