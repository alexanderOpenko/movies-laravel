<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = [
            'Action',
            'Adventure',
            'Animation',
            'Biography',
            'Comedy',
            'Crime',
            'Documentary',
            'Drama',
            'Family',
            'Fantasy',
            'History',
            'Horror',
            'Music',
            'Musical',
            'Mystery',
            'Romance',
            'Sci-Fi',
            'Short',
            'Sport',
            'Superhero',
            'Thriller',
            'War',
            'Western',
            'Noir',
            'Psychological',
            'Post-apocalyptic',
            'Cyberpunk',
            'Steampunk',
            'Martial Arts',
            'Teen',
            'Coming-of-age',
            'Experimental',
            'Surreal',
            'Found Footage',
            'Satire',
            'Political',
            'Detective',
            'Erotic',
            'Tragedy',
            'Slice of Life',
            'Parody',
            'Dark Comedy',
            'Zombie',
            'Vampire',
            'Spy',
            'Heist',
            'Disaster',
            'Alien Invasion',
            'Time Travel'
        ];

        foreach ($genres as $genre) {
            Genre::create(['name' => $genre]);
        }
    }
}

