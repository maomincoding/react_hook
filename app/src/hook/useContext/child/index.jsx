import React from 'react';
import {Parent} from '../parent/index';


export const Child =  () => {
    const count = React.useContext(Parent);
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}