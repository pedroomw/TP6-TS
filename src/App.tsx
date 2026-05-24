import { useState, useEffect } from 'react';
import Header from './Components/Header/Header.tsx';
import Feed from './Components/Feed/Feed.tsx';
import PostDetail from './Components/postDetail/postDetail.tsx';
import Profile from './Components/Profile/Profile.tsx';
import { usePosts } from './hooks/usePost.ts';
import type { AppView, CatPost } from './types/index.ts';
import './App.css';

function App() {
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

return (
  <>
    <Header
      currentView={currentView}
      onGoFeed={() => { setSelectedPost(null); setCurrentView('feed'); window.scrollTo({ top: 0 }); }}
      onGoProfile={() => setCurrentView('profile')}
    />

    {/* Feed siempre montado, solo se oculta */}
    <div style={{ display: currentView === 'feed' ? 'block' : 'none' }}>
      <Feed
        posts={posts}
        loading={loading}
        error={error}
        onSelectPost={handleSelectPost}
        onToggleLike={toggleLike}
        onToggleSave={toggleSave}
      />
    </div>

    {currentView === 'detail' && selectedPost && (
      <PostDetail
        post={selectedPost}
        onGoBack={handleGoBack}
        onToggleLike={toggleLike}
        onToggleSave={toggleSave}
      />
    )}

    {currentView === 'profile' && (
      <Profile posts={posts} onSelectPost={handleSelectPost} />
    )}
  </>
);
}

export default App;