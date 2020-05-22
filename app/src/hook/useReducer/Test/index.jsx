import React from 'react'
import Reducer from './reducer'
import { Link } from 'react-router-dom';
import Test1 from './test1'
import Test2 from './test2'

const Test = () => {
  return (
    <div>
       <button> <Link to="/"> Go Hook</Link></button>
      <Reducer>
        <div className="section">
          <Test1></Test1>
        </div>
        <div className="section">
          <Test2></Test2>
        </div>
      </Reducer>
    </div>
  )
}

export default Test

/*
此demo是利用useContext与useReducer来实现共享数据。
*/