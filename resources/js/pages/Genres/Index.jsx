import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Index() {
    const { genres } = usePage().props;

    return (
        <div className="min-h-screen max-w-[700px] bg-gray-100 p-6 !text-black">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="mb-6">
                    <a
                        href={route('home')}
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Головна
                    </a>
                </div>

                <h1 className="text-2xl font-bold mb-4 text-gray-800">Список жанрів</h1>

                <ul className="space-y-2">
                    {genres.data.map((genre) => (
                        <li key={genre.id}>
                            <Link
                                href={route('genres.show', genre.id)}
                                className="block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                            >
                                {genre.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                    {genres.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || '#'}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`px-3 py-1 rounded border text-sm ${
                                link.active
                                    ? 'bg-blue-600 text-white font-bold'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            } transition`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
