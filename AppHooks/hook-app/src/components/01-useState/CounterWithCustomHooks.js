import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import  './counter.css';


export const CounterWithCustomHooks = () => {

    const {state, increment, reset ,decrement} = useCounter(100);


    return (
        <>
            <h1>Counter with Hook: {state}</h1>   
            <hr />

            <button 
                onClick={ () => increment(2) }
                    className="btn btn-warning">+1</button>
            <button 
                onClick={ reset }
                    className="btn btn-primary">Reset</button>
            <button 
                onClick={ () => decrement(2)  }
                    className="btn btn-danger">-1</button>
        </>
    )
}
