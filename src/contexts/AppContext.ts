import { createContext } from 'react';
import type { AppView, CatPost, User } from '../types/index.ts';

interface AppContextType {
  posts: CatPost[];
  loading: boolean;
  error: string | null;
  currentUser: User;
  currentView: AppView;
  selectedPost: CatPost | null;
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
  addComment: (id: string, text: string) => void;
  handleSelectPost: (post: CatPost) => void;
  handleGoBack: () => void;
  setCurrentView: (view: AppView) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
