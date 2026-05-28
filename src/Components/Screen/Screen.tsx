import {useState, useEffect} from 'react'
import Feed from '../Feed/Feed.tsx';
import PostDetail from '../postDetail/postDetail.tsx';
import Profile from '../Profile/Profile.tsx';
import { usePosts } from '../../hooks/usePost.ts';
import type { AppView, CatPost } from '../../types/index.ts';
import './Screen.css';

interface ScreenProps {
    setCurrentView: (AppView : AppView) => void
    currentView: AppView;
    setSelectedPost: (post: CatPost) => void
    selectedPost : CatPost
}

const Screen = ({setCurrentView, currentView, setSelectedPost, selectedPost} : ScreenProps) => {
    const { posts, loading, error, toggleLike, toggleSave } = usePosts();
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

    return(
        <>
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

        {currentView === 'detail' && selectedPost ? (
        <PostDetail
            post={selectedPost}
            onGoBack={handleGoBack}
            onToggleLike={toggleLike}
            onToggleSave={toggleSave}
        />
        ) : null}

        {currentView === 'profile' ? (
        <Profile posts={posts} onSelectPost={handleSelectPost} />
        ) : null}


        </>
    )
}

export default Screen
