import './Story.css'
import type StoryInterface from '../../types/stories.ts'

const Story = ({storyData} : StoryInterface) => {
    console.log(storyData.storyData)
    return(
        <div className = "story">
            <img src={storyData.img} alt="" />
            <h3>{storyData.username}</h3>
        </div>
    )   
}

export default Story;