<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            ['title' => 'Inception', 'is_published' => false, 'poster_url' => null],
            ['title' => 'The Hangover', 'is_published' => false, 'poster_url' => null],
            ['title' => 'Parasite', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Dark Knight', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Forrest Gump', 'is_published' => false, 'poster_url' => null],
            ['title' => 'The Godfather', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Pulp Fiction', 'is_published' => false, 'poster_url' => null],
            ['title' => 'The Shawshank Redemption', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Titanic', 'is_published' => false, 'poster_url' => null],
            ['title' => 'The Matrix', 'is_published' => false, 'poster_url' => null],
            ['title' => 'Fight Club', 'is_published' => false, 'poster_url' => null],
            ['title' => 'The Lord of the Rings: The Fellowship of the Ring', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Avengers', 'is_published' => false, 'poster_url' => null],
            ['title' => 'Jurassic Park', 'is_published' => false, 'poster_url' => null],
            ['title' => 'Gladiator', 'is_published' => false, 'poster_url' => null],
            ['title' => 'The Silence of the Lambs', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Lion King', 'is_published' => false, 'poster_url' => null],
            ['title' => 'Star Wars: Episode IV - A New Hope', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Terminator', 'is_published' => false, 'poster_url' => null],
            ['title' => 'Avatar', 'is_published' => false, 'poster_url' => null],
            ['title' => 'Interstellar', 'is_published' => false, 'poster_url' => null],
            ['title' => 'Whiplash', 'is_published' => false, 'poster_url' => null],
            ['title' => 'The Revenant', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Mad Max: Fury Road', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Jaws', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Schindler\'s List', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Social Network', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Pianist', 'is_published' => true, 'poster_url' => null],
            ['title' => 'La La Land', 'is_published' => true, 'poster_url' => null],
            ['title' => '12 Angry Men', 'is_published' => true, 'poster_url' => null],
            ['title' => 'City of God', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Green Mile', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Prestige', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Se7en', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Back to the Future', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Breakfast Club', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Goodfellas', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Grand Budapest Hotel', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Truman Show', 'is_published' => true, 'poster_url' => null],
            ['title' => 'The Big Lebowski', 'is_published' => true, 'poster_url' => null],
            ['title' => 'Memento', 'is_published' => true, 'poster_url' => null],
        ];


        foreach ($movies as $movie) {
            Movie::create($movie);
        }
    }
}
