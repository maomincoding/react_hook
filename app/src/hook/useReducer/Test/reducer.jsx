import React,{createContext,useReducer} from 'react';

export const Mycontext = createContext();

const reducer = (state,action)=>{
  switch(action.type){
    case 'setname':
      return {
        ...state,
        name:action.name
      }
    case 'setage':
        return {
          ...state,
          age:action.age
    }
    default:
      return state
  }
}
const data = {
  name:'maomin',
  age:'18'
}

const Reducer = (props)=>{
  const [state,dispatch] = useReducer(reducer,data);
  return (
    <Mycontext.Provider value={{state,dispatch}}>
      {props.children}
    </Mycontext.Provider>
  )
}
export default Reducer