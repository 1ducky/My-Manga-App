import React, { useEffect, useState } from 'react';

function SimpleMangaFetch() {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi ambil data manga
    const fetchManga = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.mangadex.org/manga?title=naruto&limit=1');
        const data = await response.json();

        // Lihat bentuk hasilnya di console
        console.log(data);

        setMangas(data.data); // simpan hanya array manga
      } catch (error) {
        console.error('Gagal fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchManga();
  }, []);

  if (loading) return <p>Loading manga...</p>;

  return (
    <div>
      <h1>Hasil Fetch MangaDex</h1>
      <ul>
        {mangas.map((manga) => (
          <li key={manga.id}>
            {manga.attributes.title.en || 'Tidak Ada Judul'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleMangaFetch;
