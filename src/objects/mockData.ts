import type { Comment } from '../types/index.ts';

export const currentUser = {
  username: 'michi.lover',
  fullName: 'Michi Amante 🐾',
  avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=michi',
  bio: 'Amante de los gatos 🐱 | Buenos Aires, AR',
  followers: 1284,
  following: 312,
};

export const catUsernames = [
  'fluffly_meow', 'gatito.arg', 'purrfecto', 'whiskers99',
  'michi_queen', 'el.felino', 'catzilla_ar', 'luna.gata',
];

export const captions = [
  'Cuando el sol te da en la cara y no querés levantarte 😴',
  'Modo lunes: activado 🐾',
  '¿Me estás mirando a mí? 👀',
  'Jefe de la casa, sin dudas 😼',
  'Siesta obligatoria según la constitución gatuna 📜',
];

export const mockComments: Comment[] = [
  { id: 'c1', username: 'gata.bonita', text: '¡Qué lindoooo! 😍', time: 'hace 2h' },
  { id: 'c2', username: 'michifan_ar', text: 'Me muero de ternura 🐱', time: 'hace 1h' },
  { id: 'c3', username: 'catlovers99', text: 'Ese gato me robó el corazón', time: 'hace 45min' },
];

export const storyUsers = [
  { username: 'michi.lover', avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=michi', isOwn: true },
  { username: 'gatito.arg', avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=gatito' },
  { username: 'fluffly_meow', avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=fluffly' },
  { username: 'purrfecto', avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=purr' },
  { username: 'luna.gata', avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=luna' },
];