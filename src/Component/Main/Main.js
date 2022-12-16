import style from './Main.module.scss'
//component
import Search from './Search/Search'
import List from './List/List'
import ContextProvider from './context/ContextProvider'


const Main = () => {
    const {main_wrapper} = style
    
    return (
    <main className={main_wrapper}>
      <ContextProvider>
        <Search />
        <List/>   
      </ContextProvider> 
    </main>
  )
}

export default Main