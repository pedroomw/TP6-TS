import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { usePosts } from '../hooks/usePost.ts';
import type { AppView, CatPost } from '../types/index.ts';

// 1. Definimos el tipo de lo que va a tener nuestro contexto (TypeScript)
interface AppContextType {
  posts: CatPost[]; // o el tipo que retorne tu hook usePosts
  loading: boolean;
  error: any;
  currentView: AppView;
  selectedPost: CatPost | null;
  scrollPosition: number;
  toggleLike: (id: string) => void; // ajusta los tipos según tu hook
  toggleSave: (id: string) => void;
  handleSelectPost: (post: CatPost) => void;
  handleGoBack: () => void;
  setCurrentView: (view: AppView) => void;
}

// 2. Creamos el contexto. Inicialmente le pasamos 'undefined'
export const AppContext = createContext<AppContextType | undefined>(undefined);

// 3. Creamos el Proveedor. ¡AQUÍ ADENTRO VA TODA LA LÓGICA!
export function AppProvider({ children }: { children: ReactNode }) {
  // Los hooks y estados ahora viven felizmente DENTRO del componente
  const { posts, loading, error, toggleLike, toggleSave } = usePosts();
  const [currentView, setCurrentView] = useState<AppView>('feed');
  const [selectedPost, setSelectedPost] = useState<CatPost | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSelectPost = (post: CatPost) => {
    console.log('scroll guardado:', window.scrollY);
    setScrollPosition(window.scrollY);
    setSelectedPost(post);
    setCurrentView('detail');
    window.scrollTo({ top: 0 });
  };

  const handleGoBack = () => {
    console.log('scroll a restaurar:', scrollPosition);
    setSelectedPost(null);
    setCurrentView('feed');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        console.log('ejecutando scroll a:', scrollPosition);
        window.scrollTo({ top: scrollPosition });
      }); 
    });
  };

  // 4. Pasamos TODO al objeto 'value' del proveedor
  return (
    <AppContext.Provider value={{ 
      posts, 
      loading, 
      error, 
      toggleLike, 
      toggleSave, 
      currentView, 
      selectedPost, 
      scrollPosition, 
      handleSelectPost, 
      handleGoBack,
      setCurrentView
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
}

