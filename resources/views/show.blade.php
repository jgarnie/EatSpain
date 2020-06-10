<h1>{{$item->name}}</h1>

<p>{{$item->id}}</p>

<p>{{$item->description}}</p>

<p>{{$item->price}}Eur</p>
<img src="{{$item->image}}" alt="" srcset="">
<br>
<a href="/items"><button>back</button></a>
<a href="/item/{{$item->id}}/edit"><button>edit</button></a>
<form action="/items/delete" method="post">
    @csrf
    <input type="hidden" name="id" value="{{$item->id}}">
    <label>delete
    <input type="submit"></label>
</form>








