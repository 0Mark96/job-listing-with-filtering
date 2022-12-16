import style from './ChosenTag.module.scss'
import removeIcon from '../../../../images/icon-remove.svg'
import { useContext } from "react"
import { tagsSetterContext } from "../../context/ContextProvider"


const ChosenTag = ({tagsSearch}) => {
  const {tag_wrapper,tag_name,remove_tag} = style
    
  const dispatch = useContext(tagsSetterContext)
 
  const removeTag = (tag)=>{
    dispatch({type:'REMOVE_TAG',tag:tag})
  }

  return (
    <>
    <ul>
        {
            tagsSearch?.map((tag) => (
                <li key={tag} className={tag_wrapper}>
                    <span className={tag_name}>{tag}</span>
                    <button onClick={()=>{removeTag(tag)}} className={remove_tag}>
                      <img src={removeIcon} alt='remove tag'/>
                    </button>
                </li>
                )
            )
        }
    </ul>
    </>
  )
}

export default ChosenTag