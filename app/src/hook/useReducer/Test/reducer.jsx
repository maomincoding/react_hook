import React,{createContext,useReducer} from 'react';

export const Mycontext = createContext();

const reducer = (state,action)=>{
  switch(action.type){
    case 'setname':
      return {
        ...state,
        name:action.name
      }
    default:
      return state
  }
}
const data = {
  name:'maomin'
}

const Reducer = (props)=>{
  const [state,dispatch] = useReducer(reducer,data);
  return (
    <Mycontext.Provider value={state,dispatch}>
      {props.children}
    </Mycontext.Provider>
  )
}
export default Reducer