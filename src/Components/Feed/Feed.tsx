import './Feed.css';
import Stories from '../Stories/Stories.tsx';
import Post from '../Post/Post.tsx';        
import { useApp } from '../../hooks/useApp.ts';

const Feed = () => {
  const { posts, loading, error } = useApp();
  return (
    <section className="feed">
      <Stories />   
      {error && <p style={{ color: 'red', padding: '16px' }}>{error}</p>}
      {loading && <p style={{ padding: '16px' }}>Cargando gatos... 🐱</p>}

      <h2 className="feed-title">Trending</h2>
      <div className="feed-grid">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};

export default Feed;