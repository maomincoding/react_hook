import React,{useMemo}  from 'react';

export default ({c,n}) =>{
  let res = useMemo(()=>{
    return {c,n}
  },[c,n])
  return (
  <h2>子组件——{res.c}--{res.n}</h2>
  )
}