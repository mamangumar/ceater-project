<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardCostumerController extends Controller
{
     public function show (){
        return Inertia::render('Costumer/Dashboard');    }
}