@extends('layouts.layout', [
    'title' => 'Publisher management'
])

@section('content')


        @if (Session::has('success_message'))
<div class="alertmesg__wrapp">
    <div class="alertmesg__wrapp__inner">
        {{ Session::get('success_message') }}
    </div>
</div>
        @endif
  
  
<div class="show__wrapp">
    <div class="show__wrapp__content">

            <h1>{{$item->name}}</h1>

            <span>Product ID: </span>
            <p>{{$item->id}}</p>

            <span>Description: </span>
            <p>{{$item->description}}</p>

            <span>Price: </span>
            <p>{{$item->price}}Eur</p>

            <span>Category: </span>
            <p>{{$category->name}}</p>

            <div class="show__wrapp__content__img">
                <img src="/images/uploads/{{$item->image}}" alt="" srcset="">
            </div>
            
            <div class="show__wrapp__content__btns">
                <a href="/items"><button>back</button></a>
                <a href="/item/{{$item->id}}/edit"><button>edit</button></a>
                <form action="/items/delete" method="post">
                    @csrf
                    <input type="hidden" name="id" value="{{$item->id}}">
                    
                    <button type="submit" onclick="return confirm('Are you sure to delete {{$item->name}}?')">Delete</button>
                </form>
            </div>
    </div>
</div>
@endsection





