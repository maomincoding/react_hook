import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UseEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count);
    return () => {
      console.log('componentWillUnmount'); // 相当于 componentWillUnmount
    }
  // eslint-disable-next-line 
  }, [])
  return (
    <div>
      <button> <Link to="/"> Go Hook</Link></button>
      <div className="section">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </div>
  )
}

export default UseEffect

/*
componentDidMount 和 componentDidUpdate、componentWillUnmount
可执行副作用操作：DOM操作、数据请求、组件更新。
无阻塞更新。
useEffect(回调函数，数组（可不写）)。

*/