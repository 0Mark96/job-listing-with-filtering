import style from './Item.module.scss'
import classnames from 'classnames'
//component
import CompanyLogo from './CompanyLogo/CompanyLogo'
import JobInfo from './JobInfo/JobInfo'
import JobTag from './JobTag/JobTag'


const Item = ({job}) => {
    const {item_cont,featured_cont} = style
  return (
      <div className={classnames(item_cont,{[featured_cont]:job.featured})}>
         <CompanyLogo job={job}/>
         <JobInfo job={job}/>
         <JobTag job={job}/>
      </div>
  )
}

export default Item