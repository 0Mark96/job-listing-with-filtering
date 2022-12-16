import style from './Logo.module.scss'

const CompanyLogo = ({job}) => {
    const {logo_wrapper} = style
    
  return (
    <div className={logo_wrapper}>
      <img src={job.logo} alt='company logo'/>
    </div>
  )
}

export default CompanyLogo