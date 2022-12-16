import style from './ClearTag.module.scss'
import { useContext } from "react"
import { tagsSetterContext } from "../../context/ContextProvider"

const ClearTag = () => {
    const {clear_btn} = style
    const dispatch = useContext(tagsSetterContext)

  return (
    <button onClick={()=>dispatch({type:'CLEAR_ALL_TAG'})} className={clear_btn}>Clear</button>
  )
}

export default ClearTag