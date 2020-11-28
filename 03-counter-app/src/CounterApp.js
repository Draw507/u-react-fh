import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {
    
    const [ counter, setCounter ] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    return (
    <Fragment>
        <h1>Counter App</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>+1</button>
    </Fragment>);
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;