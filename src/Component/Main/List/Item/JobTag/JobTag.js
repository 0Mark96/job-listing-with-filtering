import style from './JobTag.module.scss'
import { useContext } from 'react'
import { tagsSetterContext } from '../../../context/ContextProvider'

const JobTag = ({job}) => {
    const {tag_wrapper,_tag} = style

    const dispatch = useContext(tagsSetterContext)
    
    const addTag = (tag)=>{
      dispatch({type:'ADD_TAG',tag:tag})
    }

  return (
    <ul className={tag_wrapper}>
      {
       job.tags.map(tag => <li key={tag}><button onClick={()=>addTag(tag)} className={_tag}>{tag}</button></li>)
      }
    </ul>
  )
}

export default JobTag