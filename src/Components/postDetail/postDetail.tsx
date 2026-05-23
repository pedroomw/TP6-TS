import { useState } from 'react';
import './postDetail.css';
import type { CatPost } from '../../types/index.ts';
import { currentUser } from '../../objects/mockData.ts';

interface PostDetailProps {
  post: CatPost;
  onGoBack: () => void;
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
}

const PostDetail = ({ post, onGoBack, onToggleLike, onToggleSave }: PostDetailProps) => {
  const [commentText, setCommentText] = useState('');

  return (
    <div className="detail-wrapper">
      <button className="detail-back" onClick={onGoBack}>
        ← Volver al feed
      </button>

      <div className="detail-card">
        {/* Imagen grande */}
        <div className="detail-image-side">
          <img src={post.url} alt={post.caption} className="detail-image" />
        </div>

        {/* Panel derecho */}
        <div className="detail-info-side">

          {/* Header del usuario */}
          <div className="detail-header">
            <img
              src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${post.username}`}
              alt={post.username}
              className="detail-avatar"
            />
            <span className="detail-username">{post.username}</span>
          </div>

          <hr className="detail-divider" />

          {/* Caption */}
          <div className="detail-caption">
            <img
              src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${post.username}`}
              alt={post.username}
              className="detail-avatar-sm"
            />
            <p>
              <strong>{post.username}</strong> {post.caption}
            </p>
          </div>

          {/* Comentarios */}
          <div className="detail-comments">
            {post.comments.map(comment => (
              <div key={comment.id} className="detail-comment">
                <img
                  src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${comment.username}`}
                  alt={comment.username}
                  className="detail-avatar-sm"
                />
                <div>
                  <p><strong>{comment.username}</strong> {comment.text}</p>
                  <span className="comment-time">{comment.time}</span>
                </div>
              </div>
            ))}
          </div>

          <hr className="detail-divider" />

          {/* Acciones */}
          <div className="detail-actions">
            <button
              className={`like-btn ${post.liked ? 'liked' : ''}`}
              onClick={() => onToggleLike(post.id)}
            >
              {post.liked ? '❤️' : '🤍'} {post.likes.toLocaleString('es-AR')} Me gusta
            </button>
            <button
              className={`save-btn ${post.saved ? 'saved' : ''}`}
              onClick={() => onToggleSave(post.id)}
            >
              {post.saved ? '🔖 Guardado' : '🔖 Guardar'}
            </button>
          </div>

          <p className="detail-date">{post.date}</p>

          <hr className="detail-divider" />

          {/* Agregar comentario */}
          <div className="detail-add-comment">
            <img src={currentUser.avatar} alt={currentUser.username} className="detail-avatar-sm" />
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

        </div>
      </div>
    </div>
  );
};

export default PostDetail;