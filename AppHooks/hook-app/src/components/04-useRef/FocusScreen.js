import React, { useRef } from 'react'
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const innputRef = useRef();
    

    const handleClick = () => {
        innputRef.current.select();
        console.log(innputRef);
    };


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref={innputRef}
                className='form-control'
                placeholder='Su nombre'

            />

            <button className='btn btn-outline-primary mt-3'
                onClick={handleClick}
                >
                Focus
            </button>

        </div>
    )
}
