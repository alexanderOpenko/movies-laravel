import React from 'react';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <div className="container max-w-[700px] mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Головна сторінка</h1>

            <div className="space-y-4">
                <Link
                    href={route('movies.index', { is_published: true })}
                    className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Переглянути опубліковані фільми
                </Link>

                <Link
                    href={route('movies.index', { is_published: false })}
                    className="block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    Переглянути неопубліковані фільми
                </Link>

                <Link
                    href={route('genres.index')}
                    className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    Переглянути жанри
                </Link>

                <Link
                    href={route('movies.create')}
                    className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    Опублікувати кіно
                </Link>
            </div>
        </div>
    );
}
