<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Role;
use Gate;//to close url for users, only for admin
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{


    public function __construct(){
        $this->middleware('auth');
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return view('admin.users.index',compact('users'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $roles = Role::all();
        return view('admin.users.edit')->with(['user'=>$user, 'roles'=>$roles]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if (Gate::allows('admin')) {
            $user->roles()->sync($request->roles);      
        }
        return redirect(route('admin.users.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {

        if (Gate::allows('admin')) {
            $user->roles()->detach();
            $user->delete();        
        }
       
        return redirect( route( 'admin.users.index' ));
    }
}
