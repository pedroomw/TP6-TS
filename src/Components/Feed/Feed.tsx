import './Feed.css';
import Stories from '../Stories/Stories.tsx';
import Post from '../Post/Post.tsx';        
import type { CatPost } from '../../types/index.ts';

interface FeedProps {
  posts: CatPost[];
  loading: boolean;
  error: string | null;
  onSelectPost: (post: CatPost) => void;
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
}

const Feed = ({ posts, loading, error, onSelectPost, onToggleLike, onToggleSave }: FeedProps) => {
  return (
    <section className="feed">
      <Stories />   
      {error && <p style={{ color: 'red', padding: '16px' }}>{error}</p>}
      {loading && <p style={{ padding: '16px' }}>Cargando gatos... 🐱</p>}

      <h2 className="feed-title">Trending</h2>
      <div className="feed-grid">
        {posts.map((post, i) => (
          <Post
            key={post.id}
            post={post}
            onSelectPost={onSelectPost}
            onToggleLike={onToggleLike}
            onToggleSave={onToggleSave}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Feed;