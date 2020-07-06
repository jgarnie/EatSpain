{{-- not being used at the moment, functionallity applied to edit blade--}}

{{--

not functional

 --}}



<h1>Add new items</h1>

<form method="post" action="/items/create">
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
        <input type="file" name="image">
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
