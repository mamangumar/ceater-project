<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DashboardAdminController;
use App\Http\Controllers\DashboardCostumerController;
use App\Http\Controllers\DashboardVendorController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\MenuFormController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VendorController;
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

Route::get('/', [LandingPageController::class, 'show'])->name('LandingPage');
Route::get('/about', [LandingPageController::class, 'about']);
Route::get('/catalog', [LandingPageController::class, 'catalog']);
Route::get('/login', [LandingPageController::class, 'login'])->name('login');
Route::get('/register', [LandingPageController::class, 'register'])->name('register');

Route::post('login', [AuthenticationController::class, 'login'])->name('login.post');
Route::post('register', [AuthenticationController::class, 'register.post']);

// Costumer routes
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardCostumerController::class, 'show'])->name('dashboard');
});

// Admin routes
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', [DashboardAdminController::class, 'show'])->name('admin.dashboard');
});



//  Route::get('vendor/profile', [VendorController::class, 'profile'])->name('vendor.profile');
//     Route::post('vendor/profile', [VendorController::class, 'store'])->name('vendor.store');
//     Route::put('vendor/profile/{id}', [VendorController::class, 'update'])->name('vendor.update');
//     Route::delete('vendor/profile/{id}', [VendorController::class, 'destroy'])->name('vendor.destroy');


Route::middleware(['auth'])->group(function () {
    Route::get('/vendor/dashboard', [DashboardVendorController::class, 'show'])->name('vendor.dashboard');
    Route::get('/vendor/orders', [DashboardVendorController::class, 'showOrders'])->name('vendor.orders');
    Route::get('/vendor/menu', [DashboardVendorController::class, 'showMenu'])->name('vendor.menu');
    Route::post('/vendor/menu', [MenuFormController::class, 'store'])->name('vendor.menu.post');
    Route::get('/vendor/profile', [VendorController::class, 'profile'])->name('vendor.profile');
    Route::post('/vendor/profile', [ProfileController::class, 'store'])->name('vendor.store');
    Route::put('/vendor/profile/{id}', [ProfileController::class, 'update'])->name('vendor.update');
    Route::delete('/vendor/profile/{id}', [ProfileController::class, 'destroy'])->name('vendor.destroy');
});
// require __DIR__.'/auth.php';