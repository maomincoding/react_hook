import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  let callback = useCallback(() => {
    console.log(count);
    return count
  }, [count]);
  return (
    <div>
      <button> <Link to="/"> Go Hook</Link></button>
      <div className="section">
        <p>count：{count}</p>
        <p>callback：{callback()}</p>
        <button onClick={() => {
          setCount(count + 1)
        }}>change</button>
        <button onClick={() => {
          setNum(num + 1)
        }}>change</button>
      </div>

    </div>
  )
}

/*
作用： 避免组件重复渲染，提高性能。可以控制组件什么时候可以更新，这点跟useMemo很像。
同样用到缓存，与useMemo不同的是 useCallback 缓存的是个函数，是个函数就可以执行。

const callback = useCallback(()=>{
  // 执行内容
}.[])
callback 是个函数，可以直接callback()执行。
*/