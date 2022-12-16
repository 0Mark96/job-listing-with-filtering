import style from './JobTag.module.scss'
import classnames from 'classnames'
import { useContext } from 'react'
import { tagsSearchContext, tagsSetterContext } from '../../../context/ContextProvider'

const JobTag = ({job}) => {
    const {tag_wrapper,_tag,tag_added,tag_name} = style

    const dispatch = useContext(tagsSetterContext)
    const tagsSearch = useContext(tagsSearchContext)

    const addTag = (tag)=>{
      if(tagsSearch.includes(tag)){
        return
      }
      dispatch({type:'ADD_TAG',tag:tag}) // add tag
      window.scrollTo({ // back to top of page
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }

  return (
    <ul className={tag_wrapper}>
      {
        job.tags.map(tag => ( 
            <li key={tag}>
                <button onClick={()=>addTag(tag)} className={classnames(_tag,{[tag_added]:tagsSearch.includes(tag)})}>
                    <span className={tag_name}>{tag}</span>
                </button>
            </li>
        ))
      }
    </ul>
  )
}

export default JobTag