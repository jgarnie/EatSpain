<a href="{{ route('logout') }}"
    onclick="event.preventDefault();
        document.getElementById('logout-form').submit();">
    {{ __('Logout') }}
</a>

<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    @csrf
</form>

<form action="{{ route('products.searchBar') }}" method="POST">
    @csrf
        <input type="text" name="name">
        <button type="submit" placeholder="type the name of the product">Search</button>


</form>