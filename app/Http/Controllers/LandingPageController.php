<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function show (){
        return Inertia::render('Welcome');    }

    public function about (){
        return Inertia::render('About');    }

    public function catalog (){
        return Inertia::render('Catalog');    }
    
    public function login (){
        return Inertia::render('Auth/AuthV2/Login');    }

        public function register (){
        return Inertia::render('Auth/AuthV2/Register');    }
}