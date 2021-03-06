@extends('layouts.layout', [
    'title' => 'Edit product'
])

@section('content')

<div class="editblade__wrapp">

    @foreach ($errors->all() as $error)
    <div class="error__wrapp">
            <li>{{ $error }}</li>
    </div>
    @endforeach

    <div class="editblade__wrapp__form">
        @if($item->id)
            <form method="post" action="/items/{{$item->id}}/update" enctype="multipart/form-data">
        @else
            <form method="post" action="{{ route('products.store') }}" enctype="multipart/form-data">
        @endif

            @csrf
                <div>
                    <div class="editblade__wrapp__form__name">Name</div>
                    <input type="text" name="name" value="{{ old('name', $item->name) }}">
                </div>
                <div>
                <div class="editblade__wrapp__form__name">Description</div>
                    <textarea type="textarea" rows="6" name="description" value="{{ old('description', $item->description) }}">@if($item->id){{$item->description}}@else{{ old('description') }}@endif</textarea>
                </div>
                <div>
                @if(!$item->id)
                <div class="editblade__wrapp__form__name">Image</div>
                @endif
                    <input type="file" name="image" value="{{ old('image', $item->image) }}">
                    @if($item->id)
                    <div class="editblade__wrapp__form__name__image">
                        <img src="/images/uploads/{{$item->image}}" alt="{{ $item->name }}">
                    </div>
                    @endif
                </div>
                <div>
                <div class="editblade__wrapp__form__name">Category</div>
                    <select name="category_id">

                    @foreach($categories as $category)
                        @if($item->category_id == $category->id)
                            <option selected value="{{$category->id}}">{{$category->name}}</option>
                        @elseif($item->category_id != $category->id)
                            <option value="{{$category->id}}">{{$category->name}}</option>
                        @endif
                    @endforeach

                    </select>
                
                </div>
                <div>
                <div class="editblade__wrapp__form__name">Eur</div>
                    <input type="text" name="price" value="{{ old('price', $item->price) }}">
                </div>
                <!-- <div>not enought time to deploy
                    <label>disount to apply in %</label>
                    <input type="text" name="discount" value="{{ old('discount', $item->discount) }}">
                </div> -->
                <div class="editblade__wrapp__form--btns">
                    <div>
                        @if($item->id)
                            <button class ="editblade__wrapp__form--btns__btn1" type="submit">Update</button>
                        @else
                            <button class ="editblade__wrapp__form--btns__btn1" type="submit">Create</button>
                        @endif
                    </div>
                    <div>
                        <a href="/items"><button class ="editblade__wrapp__form--btns__btn2" type="button">back</button></a>
                    </div>
                </div>
        </form>
        
    </div>
    

</div>
@endsection
