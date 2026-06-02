import './Screen.css'

import SideBar from "../SideBar/SideBar.tsx"
import Feed from "../Feed/Feed"
import PostDetail from "../postDetail/postDetail.tsx"
import Profile from "../Profile/Profile.tsx"
import type { AppView } from "../../types/index.ts"
import type { CatPost } from "../../types/index.ts"
import { currentUser } from "../../objects/mockData.ts"

interface ScreenProps{
    currentView : AppView;
    posts : CatPost[];
    loading : boolean;
    error : string | null;
    onSelectPost : (post : CatPost) => void;
    onToggleLike : (id : string) => void;
    onToggleSave : (id : string) => void;
    onGoBack : () => void;
    onGoProfile : () => void;
    onGoFeed : () => void;
    selectedPost : CatPost | null;
}

const Screen = ({currentView, posts, loading, error, onSelectPost, onToggleLike, onToggleSave, onGoBack, onGoProfile, onGoFeed, selectedPost} : ScreenProps) => {
    return (
        <section className = "screen-container">
            <SideBar
            currentUser = {currentUser}
            onGoProfile = {onGoProfile}
            onGoFeed = {onGoFeed}
            />
            {currentView==='feed' ? (
            <Feed 
            posts = {posts}
            loading = {loading}
            error = {error}
            onSelectPost = {onSelectPost}
            onToggleLike={onToggleLike}
            onToggleSave={onToggleSave}/>
            ) : null
            }

            {currentView==='detail' && selectedPost ? (
                <PostDetail
                post = {selectedPost}
                onGoBack = {onGoBack}
                onToggleLike = {onToggleLike}
                onToggleSave = {onToggleSave}
                />
            ) : null}

            {currentView==='profile' ? (
                <Profile
                posts = {posts}
                onSelectPost = {onSelectPost}
                />
            ) : null}
            
        </section>
    )
}

export default Screen;