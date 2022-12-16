import style from './Header.module.scss'
import bgMobile from '../../images/bg-header-mobile.svg'
import bgDesktop from '../../images/bg-header-desktop.svg'

const Header = () => {
  const {header,bg_img} = style

  return (
    <header className={header}>
      <picture>
        <source media="(min-width: 376px)" srcSet={bgDesktop} />
        <img src={bgMobile} alt="background header" className={bg_img}/>
      </picture>
    </header>
  )
}

export default Header