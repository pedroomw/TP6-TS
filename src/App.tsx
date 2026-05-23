import { useState } from 'react';
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

  const handleSelectPost = (post: CatPost) => {
    setSelectedPost(post);
    setCurrentView('detail');
  };

  return (
    <>
      <Header
        currentView={currentView}
        onGoFeed={() => { setSelectedPost(null); setCurrentView('feed'); }}
        onGoProfile={() => setCurrentView('profile')}
      />

      {currentView === 'feed' && (
        <Feed
          posts={posts}
          loading={loading}
          error={error}
          onSelectPost={handleSelectPost}
          onToggleLike={toggleLike}
          onToggleSave={toggleSave}
        />
      )}

      {currentView === 'detail' && selectedPost && (
        <PostDetail
          post={selectedPost}
          onGoBack={() => { setSelectedPost(null); setCurrentView('feed'); }}
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