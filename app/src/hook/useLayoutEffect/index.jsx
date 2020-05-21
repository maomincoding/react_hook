import React,{useLayoutEffect,useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const UseLayoutEffect = () =>{
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log('useEffect');
    return ()=>{
      console.log('useEffect-end');
    }
  });
  useLayoutEffect(()=>{
    console.log('useLayoutEffect');
    return ()=>{
      console.log('useLayoutEffect-end');
    }
  })

  return(
      <div>
        <button> <Link to="/"> Go Hook</Link></button>
        <h3>{count}</h3>
        <button onClick={()=>{
          setCount(count+1);
        }}>setCount</button>
      </div>
  )
}

export default UseLayoutEffect

/*
useLayoutEffect和useEffect作用一样。
不同的是执行时间不同，useEffect是在componentDidMount以后执行。
useLayoutEffect在浏览器执行绘制之前执行（会阻塞组件挂载，慎用）
*/