<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DashboardVendorController extends Controller
{
    public function show(){
        $vendor = Auth::user();
        $vendor->image = Storage::disk('public')->url($vendor->image);
        
        return Inertia::render('Vendor/Dashboard', [
            'vendor' => $vendor
        ]);
    }
}