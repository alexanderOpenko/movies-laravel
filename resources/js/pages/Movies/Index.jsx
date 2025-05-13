// resources/js/Pages/Movies/Index.jsx
import { usePage, router } from '@inertiajs/react';
import React from 'react';

export default function Index({ movies, is_published }) {
    const { public_url } = usePage().props;

    const handlePageChange = (url) => {
        if (url) {
            router.visit(url, {
                preserveScroll: true,
                preserveState: true,
            });
        }
    };

    return (
        <div className="container max-w-[700px] mx-auto p-4">
            <div className="mb-6">
                <a
                    href={route('home')}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    HOME
                </a>
            </div>

            <h1 className="text-2xl font-bold mb-6">
                {is_published ? "Список опублікованих фільмів" : "Список неопублікованих фільмів"}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {movies.data.map((movie) => (
                    <div key={movie.id} className="bg-white p-4 shadow-lg rounded-lg">
                        <a href={route('movies.show', movie.id)}>
                            <img
                                src={movie.poster_url || `${public_url}/movie-placeholder.jpg`}
                                alt={movie.title}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-lg text-black font-semibold mb-2 hover:underline">
                                {movie.title}
                            </h2>
                            <p className="text-sm mb-4 text-gray-500">
                                Жанр: {movie.genres.map((genre) => (
                                    <a
                                        key={genre.id}
                                        href={`/genres/${genre.id}`}
                                        className="mx-2 text-black p-2 rounded bg-gray-400 inline-block"
                                    >
                                        {genre.name}
                                    </a>
                                ))}
                            </p>
                            <p className="text-sm text-gray-500">Статус: {movie.status}</p>
                        </a>
                    </div>
                ))}
            </div>

            {/* Пагінація */}
            <div className="flex justify-center mt-8 gap-2">
                {movies.links.map((link, index) => (
                    <button
                        key={index}
                        disabled={!link.url}
                        onClick={() => handlePageChange(link.url)}
                        className={`px-3 py-1 rounded ${
                            link.active
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    );
}
