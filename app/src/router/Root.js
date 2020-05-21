import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Hook from '../hook'
import UseEffect from '../hook/useEffect'
import UseState from '../hook/useState'
import UseRef from '../hook/useRef'
import UseContext from '../hook/useContext'
import UseMemo from '../hook/useMemo'
import UseCallback from '../hook/useCallback'
import UseImperativeHandle from '../hook/useImperativeHandle'

function Root() {
  return (
          <BrowserRouter>
              <div>
                <Route exact={true} path="/" component={Hook}></Route>
                <Route exact={true} path="/UseEffect" component={UseState}></Route>
                <Route exact={true} path="/UseEffect" component={UseEffect}></Route>
                <Route exact={true} path="/UseRef" component={UseRef}></Route>
                <Route exact={true} path="/UseContext" component={UseContext}></Route>
                <Route exact={true} path="/UseMemo" component={UseMemo}></Route>
                <Route exact={true} path="/UseCallback" component={UseCallback}></Route>
                <Route exact={true} path="/UseImperativeHandle" component={UseImperativeHandle}></Route>
              </div>
          </BrowserRouter>
  );
}

export default Root;