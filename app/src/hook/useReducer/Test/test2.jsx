import React,{useContext} from 'react'
import {Mycontext} from './reducer'

const Test2 = () =>{
  const {state,dispatch} = useContext(Mycontext);
  return(
    <div>
      <p>{state.age}</p>
      <button onClick={
        ()=>{
          const action = {
            type:'setage',
            age:'22'
          }
          dispatch(action);
        }
      }>setage</button>
    </div>
  )
}

export default Test2