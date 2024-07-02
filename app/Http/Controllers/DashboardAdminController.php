<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardAdminController extends Controller
{
    public function show()
    {
        $admin = Auth::user();
        
        return Inertia::render('Admin/Dashboard', [
            'admin' => $admin
        ]);
    }
}