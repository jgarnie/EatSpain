
{{$item->id}}
<img src="{{$item->image}}" alt="" srcset="">url to img {{$item->image}}<br>
{{$item->name}}<br>
{{$item->price}}<br>
{{$item->description}}<br>

<form method="post" action="/items/{{$item->id}}/update">
    @csrf

    <div>
        <label>name</label>
        <input type="text" name="name">
        <p>current name: {{$item->name}}</p>
    </div>
    <div>
        <label>description</label>
        <input type="textarea" name="description">
        <p>current description: {{$item->description}}</p>
    </div>
     <div>
        <label>image</label>
        <input type="text" name="image">
        <p>img url: {{$item->image}}</p>

    </div>
    <div>
        <label>category</label>
        <input type="text" name="category_id">
        <p>category name: {{$item->category_id}}</p>
    </div>
    <div>
        <label>price</label>
        <input type="text" name="price">
        <p>current price: {{$item->price}} Eur</p>
    </div>
    <div>
        <label>disount to apply in %</label>
        <input type="text" name="discount">
    
        @if($item->discount!=null||$item->disccount!=0)
       <p>currently the discount for this product is {{$item->discount}}</p> 
        @else
       <p>currently there is not discount</p> 
        @endif
        
    </div>
    <input type="submit">
    
</form>
<a href="/items"><button>back</button></a>
<?php
var_dump($_POST);
