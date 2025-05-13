import React, { useState } from 'react';
import { router, useForm, usePage } from '@inertiajs/react';
import { Link } from 'lucide-react';

export default function Show({ movie }) {
    const { public_url } = usePage().props;

    const { data, setData, patch, processing, errors } = useForm({
        title: movie.title || '',
        is_published: movie.is_published || false,
        poster_url: movie.poster_url || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('movies.update', movie.id), {
            onSuccess: () => {
                window.location.href = route('movies.index'); // або '/movies', якщо немає імені маршруту
            }
        });
    };

    return (
        <div className="container max-w-[700px] mx-auto p-4">
            <div className="mb-6">
                <Link
                    href={route('home')}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    HOME
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-4">Редагування фільму</h1>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
                <div>
                    <label className="block font-semibold mb-1">Назва</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full border px-4 py-2 rounded"
                    />
                    {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Опубліковати ?</label>
                    <input
                        type="checkbox"
                        checked={data.is_published}
                        onChange={(e) => setData('is_published', e.target.checked)}
                        className="mr-2"
                    />
                    <span>{data.is_published ? 'Так' : 'Ні'}</span>
                </div>

                <div>
                    <label className="block font-semibold mb-1">Постер (URL)</label>
                    <input
                        type="text"
                        value={data.poster_url}
                        onChange={(e) => setData('poster_url', e.target.value)}
                        className="w-full border px-4 py-2 rounded"
                    />
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                    Зберегти
                </button>

                <button
                    type="button"
                    onClick={() => {
                        if (confirm('Ви впевнені, що хочете видалити цей фільм?')) {
                            router.delete(movie.id), {
                                onSuccess: () => {
                                    window.location.href = route('movies.index');
                                }
                            };
                        }
                    }}
                    className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                    Видалити фільм
                </button>
            </form>

            {data.poster_url && (
                <div className="mt-6">
                    <img
                        src={data.poster_url || public_url + '/movie-placeholder.jpg'}
                        alt={data.title}
                        className="w-full max-w-xs object-cover rounded"
                    />
                </div>
            )}
        </div>
    );
}
