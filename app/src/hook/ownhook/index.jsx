import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const useCus = (val, num) => {
  const [count, setCount] = useState(val);
  const add = () => {
    setCount(count + num);
  };
  return { count, add }
}

const Ownhook = () => {
  const { count, add } = useCus(10, 2)
  return (
    <div>
      <button> <Link to="/"> Go Hook</Link></button>
      <div className="section">
        <p>{count}</p>
        <button onClick={() => { add(); }}>ADD</button>
      </div>
    </div>
  )
}

export default Ownhook

/*
自定义 hook ,和普通的函数本质没有区别，都是做一些函数的封装。方便使用。
1、自定义hook,必须 use开头
2、自定义hook,可以使用我们这些hook (useState......) 来封装
*/
