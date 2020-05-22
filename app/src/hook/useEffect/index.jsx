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