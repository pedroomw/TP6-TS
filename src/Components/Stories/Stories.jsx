import './Stories.css'
import Story from '../Story/Story.tsx'

const Stories = ({storiesList}) => {
    return(
        <section className = "stories">
            <h1>STORIES</h1>
            console.log(storiesList)
            {storiesList.map((story) => {
                <Story profilepic = {story.pfp} username = {story.username}/>
            })}

        </section>
    )
}

export default Stories;