import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInpuChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('handleSubmit');

        setCategories(cats => [...cats, inputValue]);
        setInputValue('');
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange= { handleInpuChange }
            /> 
        </form>  
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
