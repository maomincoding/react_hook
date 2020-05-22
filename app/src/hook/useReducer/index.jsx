import React, { useReducer } from 'react'

const UseReducer = () =>{
  const [state,dispatch] = useReducer((state,action)=>{
    switch(action.type){
      case 'setname':
        return{
          ...state,
          name:action.name
        }
      default:
        return state
    }
  },{name:'maomin'})
  return (
    <div> 
      <p>{state.name}</p>
      <button onClick={()=>{
        const action = {
          type:'setname',
          name:'xqm'
        }
        dispatch(action)
      }}>change</button>
    </div>
  )
} 

export default UseReducer

/*
类似 redux 中的reducer
*/