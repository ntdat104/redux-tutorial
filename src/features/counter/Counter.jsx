import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCouter, minusCouter } from './counterAction';

function Counter() {
    const [value, setValue] = useState(1);

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleAdd() {
        dispatch(addCouter(parseInt(value)));
    }

    function handleMinus() {
        dispatch(minusCouter(parseInt(value)));
    }

    return (
        <div className="counter">
            <h1>Counter</h1>
            <h1>Current number: {counter}</h1>
            <h2>
                <input value={value} type="number" onChange={(e) => handleChange(e)}/>
            </h2>
            <div>
                <button onClick={handleAdd}>ADD</button>
                <button style={{ marginLeft: 10 }} onClick={handleMinus}>MINUS</button>
            </div>
        </div>
    );
}

export default Counter;