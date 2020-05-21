import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parent } from './parent/index';
import { Child } from './child/index';

const UseContext = () => {
    const [count] = useState(99);
    return (
        <div>
             <button> <Link to="/"> Go Hook</Link></button>
            <div className="section">
                <Parent.Provider value={count}>
                    <Child />
                </Parent.Provider>
            </div>
        </div>
    )
}

export default UseContext