<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardCostumerController extends Controller
{
     public function show()
    {
        $customer = Auth::user();
        
        return Inertia::render('Customer/Dashboard', [
            'customer' => $customer
        ]);
    }
}