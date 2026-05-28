import { useState, useEffect } from 'react';
import Header from './Components/Header/Header.tsx';
import Sidebar from './Components/Sidebar/Sidebar.tsx';
import Screen from './Components/Screen/Screen.tsx';
import './App.css';
import type { AppView , CatPost} from './types/index.ts';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('feed');
  const [selectedPost, setSelectedPost] = useState<CatPost | null>(null);
  return (
    <>
      <Header
        currentView={currentView}
        onGoFeed={() => { setSelectedPost(null); setCurrentView('feed'); window.scrollTo({ top: 0 }); }}
        onGoProfile={() => setCurrentView('profile')}
      />

      <Sidebar />
      <Screen 
        setCurrentView = {setCurrentView}
        currentView = {currentView}
        setSelectedPost = {setSelectedPost}
        selectedPost = {selectedPost}
      />
    </>
  )
}

export default App;