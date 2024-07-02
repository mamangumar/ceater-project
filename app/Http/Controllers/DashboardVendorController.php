<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DashboardVendorController extends Controller
{
    public function show()
    {
        $vendor = Auth::user();
        $menus = $vendor->menus()->get();


        $vendor->image = Storage::disk('public')->url($vendor->image);


        return Inertia::render(
            'Vendor/Dashboard',
            compact('vendor', 'menus')
        );
    }

    public function showOrders()
    {
        $vendor = Auth::user();
        $orders = $vendor->orders()->get();

        return Inertia::render('Vendor/Orders', compact('vendor', 'orders'));
    }
}
