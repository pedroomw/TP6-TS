import { useState, useEffect } from 'react';
import axios from 'axios';
import type { CatPost } from '../types/index.ts';
import { catUsernames, captions, mockComments } from '../objects/mockData.ts';

const randomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const randomBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const usePosts = () => {
  const [posts, setPosts] = useState<CatPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
          params: { limit: 12, mime_types: 'jpg,png' },
        });

        const catPosts: CatPost[] = response.data.map(
          (cat: { id: string; url: string }, index: number) => ({
            id: cat.id,
            url: cat.url,
            username: randomItem(catUsernames),
            caption: captions[index % captions.length],
            likes: randomBetween(48, 3200),
            liked: false,
            saved: false,
            date: new Date().toLocaleDateString('es-AR'),
            comments: mockComments.slice(0, randomBetween(1, 3)),
            tags: ['#gatos', '#cats', '#meow'],
          })
        );

        setPosts(catPosts);
      } catch (err) {
        setError('No se pudieron cargar las publicaciones.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  const toggleLike = (id: string) => {
    setPosts(prev =>
      prev.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p)
    );
  };

  const toggleSave = (id: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, saved: !p.saved } : p));
  };

  return { posts, loading, error, toggleLike, toggleSave };
};