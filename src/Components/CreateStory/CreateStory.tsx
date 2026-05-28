import './CreateStory.css'

const CreateStory = () => {
    return(
        <button className={`add-story`}>
        <div className="add-story-ring">
        <img src="../../assets/Icons/AddStoryIcon.png" alt="AddStoryIcon" />
        </div>
        <span>Add your story</span>
        </button>
    )
}
export default CreateStory