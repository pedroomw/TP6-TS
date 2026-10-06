import { useState } from 'react';
import type { ReactNode } from 'react';
import { usePosts } from '../hooks/usePost.ts';
import { currentUser } from '../objects/mockData.ts';
import type { AppView, CatPost } from '../types/index.ts';
import { AppContext } from './AppContext.ts';

export function AppProvider({ children }: { children: ReactNode }) {
  const { posts, loading, error, toggleLike, toggleSave, addComment } = usePosts();
  const [currentView, setCurrentView] = useState<AppView>('feed');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  // Derivar el detalle evita mostrar una copia desactualizada al interactuar.
  const selectedPost = posts.find(post => post.id === selectedPostId) ?? null;

  const handleSelectPost = (post: CatPost) => {
    setScrollPosition(window.scrollY);
    setSelectedPostId(post.id);
    setCurrentView('detail');
    window.scrollTo({ top: 0 });
  };
  const handleGoBack = () => {
    setSelectedPostId(null);
    setCurrentView('feed');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => window.scrollTo({ top: scrollPosition }));
    });
  };
  return (
    <AppContext.Provider value={{
      posts, loading, error, currentUser, toggleLike, toggleSave, addComment,
      currentView, selectedPost, handleSelectPost, handleGoBack, setCurrentView,
    }}>
      {children}
    </AppContext.Provider>
  );
}
