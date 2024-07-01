<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function profile(){
        
        $vendor = User::find(auth()->user()->id);
        return Inertia::render('Vendor/Profile', [
            'vendor' => $vendor
        ]);
    }

    


    
}