import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {decrement, increment} from "./store/toolKitRedux/toolKitReducer";

function App() {
    const count = useSelector(state => state.toolkit.count)
    const dispatch = useDispatch()
    return (
        <div className="App">
            works
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
}

export default App;
