import './Feed.css'
import Stories from '../Stories/Stories.jsx'
import storiesList from '../../objects/storiesList.ts'

const Feed = () => {
    return(
        <section className = "feed">
            <Stories storiesList = {storiesList}/>
        </section>
    )
}

export default Feed;