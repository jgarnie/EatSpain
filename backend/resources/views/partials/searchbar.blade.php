<form action="{{ route('products.searchBar') }}" method="POST">
    @csrf
        <input type="text" name="name">
        <button type="submit" placeholder="type the name of the product">Search</button>


</form>