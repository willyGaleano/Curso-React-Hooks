import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { procesadoPesado } from '../helpers/procesoPesado';

export const MemoHooks = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    

    //recibe un callback y luego las dependencias (inputs)
    //Si el counter cambia necesito una nueva version memorizada del resultado de esa funcion
    const memoProcesoPesado = useMemo( () => procesadoPesado(counter), [counter] );

    return (
        <div>
            <h1>MemoHooks</h1>
            <h3>Counter: <small> {counter} </small>  </h3>
            <hr/>

            <p>{ memoProcesoPesado }</p>

            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                Incrementar

            </button>

            <button 
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}

            </button>


        </div>
    )
}
