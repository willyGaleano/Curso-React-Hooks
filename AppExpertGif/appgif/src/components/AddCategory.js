import React, {useState} from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); // ''
    //const [inputValue, setInputValue] = useState(''); undefine

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //para prevenir el comportamiento del form, que actualiza
        //toda la pagina
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue('');    
        }

    }

    return (
        <form onSubmit = {handleSubmit}> 
            <>
                <input
                    type="text"
                    value = {inputValue}
                    onChange={ handleInputChange }
                />

            </>
        </form>
        
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
