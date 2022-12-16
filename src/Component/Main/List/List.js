import jobData from './data.json'
import style from './List.module.scss'
import { useContext, useMemo } from 'react'
import { tagsSearchContext } from '../context/ContextProvider'
//component
import Item from './Item/Item'


const List = () => {
    const {list_wrapper} = style

    const tagsSearch = useContext(tagsSearchContext)
    //mutate obj for a easy access to tags array
    let jobList = jobData
    const newObj = useMemo(()=>{ return (
      jobList.map(job =>({
                 id: job.id,
                 company: job.company,
                 logo: job.logo,
                 new: job.new,
                 featured: job.featured,
                 position: job.position,
                 postedAt: job.postedAt,
                 contract: job.contract,
                 location: job.location,
                 tags:[job.role, job.level, ...job.tools, ...job.languages]
               })))},[jobList])

    // When the array tags change, filter job comparing tags
    const filteredList = useMemo(()=>{
      if(tagsSearch.length > 0){
        return newObj.filter((job => tagsSearch.every(v => job.tags.includes(v))))
      }else{
        return newObj
      }
    },[tagsSearch,newObj])


    return (
    <div className={list_wrapper}>
       {filteredList?.map(job =><Item job={job} key={job.id}/>)} 
    </div>
  )
} 

export default List     
