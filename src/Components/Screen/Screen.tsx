import './Screen.css';
import SideBar from '../SideBar/SideBar.tsx';
import Feed from '../Feed/Feed.tsx';
import PostDetail from '../postDetail/postDetail.tsx';
import Profile from '../Profile/Profile.tsx';
import { useApp } from '../../hooks/useApp.ts';

const Screen = () => {
  const { currentView, selectedPost } = useApp();
  return (
    <section className="screen-container">
      <SideBar />
      {currentView === 'feed' && <Feed />}
      {currentView === 'detail' && selectedPost && <PostDetail post={selectedPost} />}
      {currentView === 'profile' && <Profile />}
    </section>
  );
};
export default Screen;
