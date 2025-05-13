<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\MovieController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

Route::resource('genres', GenreController::class);
Route::resource('movies', MovieController::class);

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/movies', [MovieController::class, 'index'])->name('movies.index');
Route::get('/movies/{id}', [MovieController::class, 'show'])->name('movies.show');

Route::get('/movies/create', [MovieController::class, 'create'])->name('movies.create');
Route::post('/movies', [MovieController::class, 'store'])->name('movies.store');
Route::put('/movies/{movie}/publish', [MovieController::class, 'publish'])->name('movies.publish');

Route::resource('genres', GenreController::class);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
