<a href="/create"><button>create new Item</button></a>


@foreach($items as $item)
<div>
    <h2>{{$item->name}}</h2>

    <p>{{$item->description}}</p>
    <p>{{$item->price}}</p>
            
    <a href="/items/{{$item->id}}"><button>Details</button></a>




</div>

@endforeach
<?php
