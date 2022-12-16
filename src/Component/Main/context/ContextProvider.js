import { createContext, useReducer } from "react"

export const tagsSetterContext = createContext(()=>{})
export const tagsSearchContext = createContext([])

const initialstate = {
    tagsSearch:[],
  }

const tagsReducer = (state, action) => {
   
switch (action.type) {
    case 'ADD_TAG':
        return {
          tagsSearch: [...state.tagsSearch,action.tag]
        }
    case 'REMOVE_TAG':
       return {
         tagsSearch: state.tagsSearch.filter(tag => tag !== action.tag)
       }
    case 'CLEAR_ALL_TAG':
      return {
        tagsSearch:[]
      }
    default:
       return state;
  }
}; 

const ContextProvider = ({children}) => {

    const [{tagsSearch}, dispatch] = useReducer(tagsReducer, initialstate);
 
  return (
        <tagsSearchContext.Provider value={tagsSearch}>
            <tagsSetterContext.Provider value={dispatch}>
               {children}
            </tagsSetterContext.Provider>
        </tagsSearchContext.Provider>
  )
}

export default ContextProvider