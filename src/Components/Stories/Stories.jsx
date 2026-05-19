import './Stories.css'
import Story from '../Story/Story.tsx'

const Stories = ({storiesList}) => {
    console.log(storiesList)
    return(
        <section className = "stories">
            <h1>STORIES</h1>
            {
                storiesList.map((storyData) => {
                <Story storyData = {storyData}/>
                })
            }
        </section>
    )
}

export default Stories;