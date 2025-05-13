import { useForm } from '@inertiajs/react';
import { Link } from 'lucide-react';

export default function Create({ genres }) {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    genres: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post('/movies', {
      onSuccess: () => {
        window.location.href = '/movies';
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <a
          href={route('home')}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          HOME
        </a>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Створити фільм</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Назва фільму
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            required
          />
          {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="genres" className="block text-sm font-medium text-gray-700">
            Жанри
          </label>
          <select
            id="genres"
            multiple
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            value={data.genres}
            onChange={(e) =>
              setData(
                'genres',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
          >
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          {errors.genres && <div className="text-red-500 text-sm">{errors.genres}</div>}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={processing}
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Створити фільм
          </button>
        </div>
      </form>
    </div>
  );
}
