import './Profile.css';
import { currentUser } from '../../objects/mockData.ts';
import type { CatPost } from '../../types/index.ts';

interface ProfileProps {
  posts: CatPost[];
  onSelectPost: (post: CatPost) => void;
}

const Profile = ({ posts, onSelectPost }: ProfileProps) => {
  return (
    <div className="profile-wrapper">

      {/* Header del perfil */}
      <div className="profile-header">
        <img src={currentUser.avatar} alt={currentUser.username} className="profile-avatar" />

        <div className="profile-info">
          <div className="profile-top-row">
            <h2 className="profile-username">{currentUser.username}</h2>
            <button className="profile-edit-btn">Editar perfil</button>
          </div>

          <div className="profile-stats">
            <span><strong>{posts.length}</strong> publicaciones</span>
            <span><strong>{currentUser.followers.toLocaleString('es-AR')}</strong> seguidores</span>
            <span><strong>{currentUser.following}</strong> seguidos</span>
          </div>

          <p className="profile-fullname">{currentUser.fullName}</p>
          <p className="profile-bio">{currentUser.bio}</p>
        </div>
      </div>

      <hr className="profile-divider" />

      {/* Grilla de publicaciones */}
      <div className="profile-grid">
        {posts.map(post => (
          <button
            key={post.id}
            className="profile-grid-item"
            onClick={() => onSelectPost(post)}
          >
            <img src={post.url} alt={post.caption} />
            <div className="profile-grid-overlay">
              <span>❤️ {post.likes.toLocaleString()}</span>
              <span>💬 {post.comments.length}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Profile;