<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();

        return Inertia::render(
            'User/Index',
            [
                'status' => session('status'),
                'users'  => $users
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'User/FormCreate',
            [
                'status' => session('status'),
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        // dd($user);
        // $user_to_update = User::findorfail($user);
        // if ($user_to_update) {
            return Inertia::render(
                // 'User/FormUpdate',
                // [
                //     'status' => session('status'),
                //     'user'  => $user_to_update
                // ]
                'User/Show',
                [
                    'status' => session('status'),
                    'users'  => $user
                ]
            );
        // }
        // return redirect()->route('users');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $user_to_update = User::findorfail($user);
        if ($user_to_update) {
            return Inertia::render(
                // 'User/FormUpdate',
                // [
                //     'status' => session('status'),
                //     'user'  => $user_to_update
                // ]
                'User/Index',
            [
                'status' => session('status'),
                'users'  => $users
            ]
            );
        } else {
            // return redirect()->route('users.index')->with('status', 'Error al editar usaurio');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
