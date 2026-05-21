import './Stories.css'
import Story from '../Story/Story.tsx'
import type StoryInterface from '../../types/stories.ts'

const Stories = ({storiesList}) => {
    return(
        <section className = "stories">
            <h1>STORIES</h1>
            {
                storiesList.map((storyData : StoryInterface) => (
                <Story {...storyData}/>
                ))
            }
        </section>
    )
}

export default Stories;