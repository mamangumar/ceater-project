<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DashboardCostumerController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/', [LandingPageController::class,'show'])->name('LandingPage');
Route::get('/about', [LandingPageController::class, 'about']);
Route::get('/catalog', [LandingPageController::class, 'catalog']);
Route::get('/login', [LandingPageController::class, 'login'])->name('login');
Route::get('/register', [LandingPageController::class, 'register'])->name('register');

Route::post('login',[AuthenticationController::class,'login']);
Route::post('register',[AuthenticationController::class,'register']);

// Costumer
Route::get('/dashboard', [DashboardCostumerController::class, 'show'])->name('dashboard');

// require __DIR__.'/auth.php';