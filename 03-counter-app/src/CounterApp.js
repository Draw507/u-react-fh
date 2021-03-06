import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 5 } ) => {
    
    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubtract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(value);
    };

    return (
    <Fragment>
        <h1>Counter App</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubtract }>-1</button>
    </Fragment>);
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;