import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';

const UseReducer = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'setname':
        return {
          ...state,
          name: action.name
        }
      default:
        return state
    }
  }, { name: 'maomin' })
  return (
    <div>
      <button> <Link to="/"> Go Hook</Link></button>
      <div className="section">
        <p>{state.name}</p>
        <button onClick={() => {
          const action = {
            type: 'setname',
            name: 'xqm'
          }
          dispatch(action)
        }}>change</button>
      </div>
    </div>
  )
}

export default UseReducer

/*
类似 redux 中的reducer
*/