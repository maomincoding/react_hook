import React from 'react';
import { Link } from 'react-router-dom';

const Hook = ()=>{
  return (
    <div>
      <button> <Link to="/UseEffect"> Go UseEffect</Link></button>
      <button> <Link to="/UseRef"> Go UseRef</Link></button>
      <button> <Link to="/UseContext"> Go UseContext</Link></button>
      <button> <Link to="/UseMemo"> Go UseMemo</Link></button>
      <button> <Link to="/UseCallback"> Go UseCallback</Link></button>
      <button> <Link to="/UseImperativeHandle"> Go UseImperativeHandle</Link></button>
      <button> <Link to="/UseLayoutEffect"> Go UseLayoutEffect</Link></button>
    </div>
  )
}

export default Hook;