import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UseState = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ name: 'maomin' });
  const [arr, setArr] = useState([1, 2, 3]);
  const [func, setFunc] = useState(() => {
    return 1
  })
  return (
    <div>
      <button> <Link to="/"> Go Hook</Link></button>
      <div className="section">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
      <div className="section">
        <p>{obj.name}-{obj.age}</p>
        <button onClick={() => setObj({ name: 'xqm', age: 18 })}>changeOBJ</button><br />
        <button onClick={() => setObj({ ...obj, age: 20 })}>changeOBJ 2</button>
      </div>
      <div className="section">
        <p>{arr}</p>
        <button onClick={() => {
          setArr(() => {
            arr.push(4);
            return [...arr]
          })
        }
        }>changeArr</button>
      </div>
      <div className="section">
        <p>{func}</p>
        <button onClick={() => setFunc(func + 1)}>changeFuc</button>
      </div>
    </div>
  )
}

export default UseState