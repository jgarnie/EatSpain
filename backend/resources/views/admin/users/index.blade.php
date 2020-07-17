@extends('layouts.layout')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Users</div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th class="userclasshide" scope="col" >Email</th>
                                <th scope="col">Roles</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            @foreach($users as $user)
                        
                                <tr>
                                    <th scope="row">{{ $user->id }}</th>
                                        <td>{{ $user->name }}</td>
                                        <td class="userclasshide">{{ $user->email }}</td>
                                        <td>{{ implode(', ',$user->roles()->get()->pluck('name')->toArray()) }}</td>
                                        <td><a href="{{ route('admin.users.edit', $user->id) }}" class="float-left"><button class="btn btn-primary">Edit</button></a>
                                        <form action="{{ route('admin.users.destroy', $user) }}" method="POST">
                                        @csrf
                                        {{ method_field('DELETE') }}
                                            <button type="submit" class="btn btn-warning" class="float-left">Delete</button>

                                        </form>
                                    </td>
                                </tr>
                            
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
