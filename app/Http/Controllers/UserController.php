<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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

        try {


            $array['name'] = $request->name;
            $array['email'] = $request->email;
            $array['password'] = Hash::make($request->password);
            $user = new User($array);

            $user->save();

            $error = false;

            return Inertia::render(
                'User/Index',
                [
                    'status' => session('status'),
                    'successMsg' => '¡El usuario se ha creado exitosamente!',
                    'users' => User::all()
                ]
            );
        }
        catch(Exception $e){
            $error = true;

            return Inertia::render(
                'User/Index',
                [
                    'status' => session('status'),
                    'errorMsg' => '¡Ocurrio un error al crear el usuario!'
                ]
            );

        }


    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        if ($user) {

            return Inertia::render(
                'User/Show',
                [
                    'status' => session('status'),
                    'user'  => $user
                    ]
            );
        } else {

            $users = User::all();
            return Inertia::render(
                'User/Index',
                [
                    'status' => session('status'),
                    'error' => 'Error al ver Usuario',
                    'users'  => $users
                    ]
            );
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        // $user_to_update = User::findorfail($user);
        if ($user) {
            return Inertia::render(
                'User/FormUpdate',
                [
                    'status' => session('status'),
                    'user'  => $user
                ]
            );
        } else {
            $users = User::all();
            return Inertia::render(
                'User/Index',
                [
                    'status' => session('status'),
                    'error' => 'Error al Editar Usuario',
                    'users'  => $users
                    ]
            );
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        if ($user) {

            // dd($request, $user);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->active = $request->active;

            // dd($user, $request);
            $user->update();

            return Inertia::render(
                'User/FormUpdate',
                [
                    'status' => session('status'),
                    'user_updated'  => $user,
                    'user'=> Auth::user()
                ]
            );

            // return Inertia::render(
            //     'User/FormUpdate',
            //     [
            //         'status' => session('status'),
            //         'user'  => $user
            //     ]
            // );
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
