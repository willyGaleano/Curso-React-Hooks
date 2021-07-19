import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //condicionar el useState, que solo se ejecute una vez
    useEffect( () => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    //si la categoria cambia volvera a ejecutar ese efecto
    },[category])

    return state ;
}