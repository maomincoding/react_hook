import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const UseRef = () => {
  const refs = useRef(null);
  // const save = useRef({ value: '123' });
  return (
    <div>
      <button> <Link to="/"> Go Hook</Link></button>
      <div className="section">
        <input type="text" ref={refs}/>
        <button onClick={() => {
          // 可以打印出dom对象
          console.log(refs);
          console.log(refs.current.value);
          console.log(refs.current);
          // 可以保存值
          // save.current.value = refs.current.value;
          // console.log(save);
        }}>useRef</button>
      </div>
    </div>
  )
}

export default UseRef