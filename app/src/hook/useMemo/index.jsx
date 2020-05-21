import React, { useMemo, useState } from 'react';
import ChildMemo from './childMemo/index';
import { Link } from 'react-router-dom';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    let res = useMemo(() => {
        return { count, num }
    }, [count, num])
    // useEffect(()=>{
    //     console.log("useEffect");
    // })
    return (
        <div>
            <button> <Link to="/"> Go Hook</Link></button>
            <div className="section">
                <div>count：{res.count}</div>
                <button onClick={() => { setCount(count + 1); console.log(res.count); }}>change-count</button>
                <div>num：{res.num}</div>
                <button onClick={() => { setNum(num + 1); console.log(res.num); }}>change-num</button>
                <ChildMemo c={res.count} n={res.num} />
            </div>
        </div>
    )
}

export default UseMemo

/*
使用 useMemo 避免重复渲染页面。

useEffect与useMemo执行时间不同
useMemo 是在组件渲染过程中执行的，useEffect是在componentDidMount以后执行的。也就是说useMemo先于useEffect执行。

当状态或者父组件传来的属性发生变化时，更新组件
*/