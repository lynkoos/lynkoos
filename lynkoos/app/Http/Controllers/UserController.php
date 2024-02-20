<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }

    public function create()
    {
        return view('users.create');
    }

    public function store(Request $request)
    {
        // Validación de datos
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        // Crear usuario
        User::create($request->all());

        return redirect()->route('users.index')
                         ->with('success', 'User created successfully');
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return view('users.show', compact('user'));
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return view('users.edit', compact('user'));
    }

    public function update(Request $request, $id)
    {
        // Validación de datos
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
            'password' => 'required',
        ]);

        // Actualizar usuario
        $user = User::findOrFail($id);
        $user->update($request->all());

        return redirect()->route('users.index')
                         ->with('success', 'User updated successfully');
    }

    public function destroy($id)
    {
        // Eliminar usuario
        User::findOrFail($id)->delete();
        return redirect()->route('users.index')
                         ->with('success', 'User deleted successfully');
    }
}
