import './Screen.css'

import SideBar from "../SideBar/SideBar.tsx"
import Feed from "../Feed/Feed"
import PostDetail from "../postDetail/postDetail.tsx"
import Profile from "../Profile/Profile.tsx"
import { currentUser } from "../../objects/mockData.ts"


const Screen = () => {
    return (
        <section className = "screen-container">
            <SideBar
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