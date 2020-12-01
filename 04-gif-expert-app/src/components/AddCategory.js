import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleInpuChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('handleSubmit');

        setCategories(cats => [...cats, 'Shingeki']);
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
