<h1>HI</h1>
{{$item->id}}
{{$item->name}}<br>
{{$item->price}}<br>
{{$item->description}}<br>
<form method="post" action="/items/{{$item->id}}/update">
    @csrf
    <div>

        <label>name</label>
        <input type="text" name="name">
    </div>
    <div>
        <label>description</label>
        <input type="textarea" name="description">
    </div>
     <div>
        <label>image</label>
        <input type="text" name="image">
    </div>
    <div>
        <label>category</label>
        <input type="text" name="category_id">
    </div>
    <div>
        <label>price</label>
        <input type="text" name="price">
    </div>
    <div>
        <label>disounted</label>
        <input type="text" name="discount">
    </div>
    <input type="submit">
    
</form>
<a href="/items"><button>back</button></a>
<?php
var_dump($_POST);
