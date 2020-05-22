import React,{useContext} from 'react'
import {Mycontext} from './reducer'

const Test1 = () =>{
  const {state,dispatch} = useContext(Mycontext);
  return(
    <div>
      <p>{state.name}</p>
      <button onClick={()=>{
        const action ={
          type:'setname',
          name:'xqm'
        }
        dispatch(action)
      }}>setname</button>
    </div>
  )
}

export default Test1
