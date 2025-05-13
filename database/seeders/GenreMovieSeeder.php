<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;
use App\Models\Genre;
class GenreMovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $movies = Movie::all();
        $genres = Genre::all();

        foreach ($movies as $movie) {
            $movie->genres()->attach($genres->random(rand(1, 3))->pluck('id')->toArray());
        }
    }
}
