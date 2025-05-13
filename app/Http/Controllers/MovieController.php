<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Genre;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function create()
    {
        $genres = Genre::all();
        return Inertia::render('Movies/Create', compact('genres'));
    }

    public function show($id)
    {
        $movie = Movie::with('genres')->findOrFail($id);

        return Inertia::render('Movies/Show', [
            'movie' => $movie,
            'public_url' => asset('storage'), // або просто asset('')
        ]);
    }

    public function update(Request $request, $id)
    {
        $movie = Movie::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'is_published' => 'boolean',
            'poster_url' => 'nullable|string|max:2048'
        ]);

        $movie->update($validated);

        return redirect()->back()->with('success', 'Фільм оновлено!');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'poster_url' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'genres' => 'array',
        ]);

        $posterUrl = $request->file('poster_url') ? $request->file('poster_url')->store('posters', 'public') : null;

        $movie = Movie::create([
            'title' => $validated['title'],
            'poster_url' => $posterUrl,
            'is_published' => false,
        ]);

        $movie->genres()->sync($validated['genres'] ?? []);

        return redirect()->route('movies.index');
    }

    public function index(Request $request)
    {
        $isPublished = $request->query('is_published');

        $query = Movie::with('genres');

        if (!is_null($isPublished)) {
            $isPublished = filter_var($isPublished, FILTER_VALIDATE_BOOLEAN);
            $query->where('is_published', $isPublished);
        }

        $movies = $query->paginate(7)->withQueryString();

        return Inertia::render('Movies/Index', [
            'movies' => $movies,
            'is_published' => $isPublished,
        ]);
    }


    public function destroy($id)
    {
        $movie = Movie::findOrFail($id);
        $movie->genres()->detach();
        $movie->delete();

        return redirect()->route('movies.index')->with('success', 'Фільм видалено!');
    }
}
