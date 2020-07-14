<div class="logoutBlade">
    <div class="logoutBlade__wrap">
        <div class="logoutBlade__searchbar">
            <form action="{{ route('products.searchBar') }}" method="POST">
            @csrf
                <input type="text" name="name" placeholder="type the name of a product">
                <button type="submit">Search</button>
            </form>
        </div>

        <div class="logoutBlade__logout">
            <a href="{{ route('logout') }}"
                onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
            </form>
        </div>
        
    </div>
</div>