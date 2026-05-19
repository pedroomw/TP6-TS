import './Story.css'

const Story = ({profilepic, username}) => {
    return(
        <div className = "story">
            <img src={profilepic} alt="" />
            <h3>{username}</h3>
        </div>
    )
}

export default Story;