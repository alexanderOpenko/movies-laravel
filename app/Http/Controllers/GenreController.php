<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Genre;
use Inertia\Inertia;

class GenreController extends Controller
{
    public function index(Request $request)
    {
        $genres = Genre::paginate(10); 

        return Inertia::render('Genres/Index', [
            'genres' => $genres,
        ]);
    }

    public function show($id)
    {
        $genre = Genre::findOrFail($id);

        $movies = $genre->movies()->paginate(8); 

        return Inertia::render('Genres/Show', [
            'genre' => $genre,
            'movies' => $movies,
        ]);
    }
}



