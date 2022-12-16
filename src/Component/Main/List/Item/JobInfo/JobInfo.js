import style from './JobInfo.module.scss'


const JobInfo = ({job}) => {
    const {info_wrapper,primary_info,_company,_new,_featured,_position,secondary_info} = style
  return (
    <div className={info_wrapper}>
      
      <div className={primary_info}>
        <p className={_company}>{job?.company}</p>
        {job?.new && <span className={_new}>NEW!</span>}
        {job?.featured && <span className={_featured}>FEATURED</span>}
      </div>
      
      <p className={_position}>{job?.position}</p>
      
      <ul className={secondary_info}>
        <li>{job?.postedAt}</li>
        <li>{job?.contract}</li>
        <li>{job?.location}</li>
      </ul>

    </div>
  )
}

export default JobInfo
