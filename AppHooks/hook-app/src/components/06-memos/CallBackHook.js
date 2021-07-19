import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';


export const CallBackHook = () => {

    /*
    El uso del callBack hook tienen dos casos de uso
    1) Cuando mandamos una funcion a un componente hijo
    2) Cuando usamos useEffect y la dependencia es una funcion

    */

    const [counter, setcounter] = useState(10);
    /*
    const increment = ()=>{
        setcounter(counter + 1);
    }*/

    //No haremos dependiente de counter por eso usamos c => c
    const increment = useCallback( (num) => {
        setcounter(c => c + num);
    },[setcounter] );

    

    return (
        <div>
            <h1>Use Callback: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>

        </div>
    )
}
