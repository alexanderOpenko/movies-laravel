import React from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from 'lucide-react';

export default function Show({ genre, movies }) {
    const { public_url } = usePage().props;

    return (
        <div className="container max-w-[700px] mx-auto p-6">
            <div className="mb-6">
                <a
                    href={route('home')}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    HOME
                </a>
            </div>
            <h1 className="text-3xl font-bold mb-6">Жанр: {genre.name}</h1>

            {movies.data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {movies.data.map((movie) => (
                        <a href={route('movies.show', movie.id)}>
                            <div key={movie.id} className="bg-white shadow rounded p-4">
                                <img
                                    src={movie.poster_url || public_url + '/movie-placeholder.jpg'}
                                    alt={movie.title}
                                    className="w-full h-64 object-cover rounded mb-4"
                                />
                                <h2 className="text-lg text-black font-semibold mb-2 hover:underline">
                                    {movie.title}
                                </h2>
                                <p className="text-sm text-gray-600">Статус: {movie.is_published ? 'Опубліковано' : 'Неопубліковано'}</p>
                            </div>
                        </a>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Фільми цього жанру відсутні.</p>
            )}
        </div>
    );
}
