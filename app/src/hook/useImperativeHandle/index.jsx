import React, { useImperativeHandle, forwardRef, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

// const ForwardRef = forwardRef((props, ref) => {
//   return (
//     <div>
//       <h3 ref={ref}>hello</h3>
//       <h4>world</h4>
//     </div>
//   )
// })

// 自定义向父组件暴露属性或方法

const ImperativeHandle = forwardRef((props, ref) => {
  const inset = useRef();
  const [p1,setP1] = useState(0);
  const [p2,setP2] = useState(0);
  useImperativeHandle(ref, () => ({
    name: 'maomin',
    focus: () => {
      inset.current.focus()
    },
    p1
  // eslint-disable-next-line 
  }),[p2]) // 只有 p2改变的时候，才会把p1传给父组件
  return (
    <div>
      <p>p1:{p1}</p>
      <p>p2:{p2}</p>
      <input type="text" ref={inset} />
      <button onClick={()=>{
        setP1(p1+1)
      }}>setP1</button>
      <button onClick={()=>{
        setP2(p2+1)
      }}>setP2</button>
    </div>
  )
})

const UseImperativeHandle = () => {
  // const el = useRef(null);
  const el1 = useRef(null);
  return (
    <div>
      <button> <Link to="/"> Go Hook</Link></button>
      <div className="section">
        {/* <ForwardRef ref={el}></ForwardRef> */}
        {/* <button onClick={() => {
          console.log(el.current);
        }}>打印ForwardRef</button> */}
         <ImperativeHandle ref={el1}></ImperativeHandle>
        <button onClick={() => {
          // el1.current.focus();
          console.log(el1.current);
        }}>打印ImperativeHandle</button>
      </div>

    </div>
  )
}

export default UseImperativeHandle