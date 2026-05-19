import './Feed.css'
import {useState} from 'react'
import Stories from '../Stories/Stories.js'
import listJson from '../../objects/storiesList.ts'

const Feed = () => {    
    const[storiesList, setstoriesList] = useState(listJson)
    return(
        <section className = "feed">
            <Stories storiesList = {storiesList}/>
        </section>
    )
}

export default Feed;