import style from './Search.module.scss'
import classnames from 'classnames'
import { useContext } from 'react'
import { tagsSearchContext } from "../context/ContextProvider"
//component
import ChosenTag from './ChosenTag/ChosenTag'
import ClearTag from './ClearTag/ClearTag'


const Search = () => {
    const {search_cont,display_search} = style

    const tagsSearch = useContext(tagsSearchContext)
  
  return (
    <div className={classnames(search_cont,{[display_search]:tagsSearch.length > 0})}>
      <ChosenTag tagsSearch={tagsSearch}/>
      <ClearTag />
    </div>
  )
}

export default Search