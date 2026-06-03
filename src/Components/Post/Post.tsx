import { useState } from 'react';
import './Post.css';
import type { CatPost } from '../../types/index.ts';
import { currentUser } from '../../objects/mockData.ts';

interface PostProps {
  post: CatPost;
  onSelectPost: (post: CatPost) => void;
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
  index: number;
}

const Post = ({ post, onSelectPost, onToggleLike, onToggleSave }: PostProps) => {
  const [commentText, setCommentText] = useState('');

  const handleDoubleTap = () => {
    if (!post.liked) onToggleLike(post.id);
  };

  return (
    <article className="post">

      {/* Header */}
      <div className="post-header">
        <div className="post-user">
          <img
            src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${post.username}`}
            alt={post.username}
            className="post-avatar"
          />
          <span className="post-username">{post.username}</span>
        </div>
        <button className="post-more">···</button>
      </div>

      {/* Imagen */}
      <div className="post-image-wrapper" onDoubleClick={handleDoubleTap}>
        <img
          src={post.url}
          alt={post.caption}
          className="post-image"
          onClick={() => onSelectPost(post)}
        />
      </div>

      {/* Acciones */}
      <div className="post-actions">
        <div className="post-actions-left">
          <button
            className={`action-btn ${post.liked ? 'liked' : ''}`}
            onClick={() => onToggleLike(post.id)}
          >
            {post.liked ? '❤️' : '🤍'}
          </button>
          <button className="action-btn" onClick={() => onSelectPost(post)}>
            💬
          </button>
          <button className="action-btn">
            📤
          </button>
        </div>
        <button
          className={`action-btn ${post.saved ? 'saved' : ''}`}
          onClick={() => onToggleSave(post.id)}
        >
          {post.saved ? '🔖' : '🔖'}
        </button>
      </div>

      {/* Info */}
      <div className="post-body">
        <p className="post-likes">{post.likes.toLocaleString('es-AR')} Me gusta</p>

        <p className="post-caption">
          <span className="post-caption-user">{post.username}</span> {post.caption}
        </p>

        <p className="post-tags">{post.tags.join(' ')}</p>

        <button className="post-comments-link" onClick={() => onSelectPost(post)}>
          Ver los {post.comments.length} comentarios
        </button>

        <p className="post-date">{post.date}</p>
      </div>

      {/* Agregar comentario */}
      <div className="post-add-comment">
        <img src={currentUser.avatar} alt={currentUser.username} className="comment-avatar" />
        <input
          type="text"
          placeholder="Agregá un comentario..."
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
        {commentText && (
          <button className="comment-submit" onClick={() => setCommentText('')}>
            Publicar
          </button>
        )}
      </div>

    </article>
  );
};

export default Post;
