import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional components
const PrimeraApp = ({ saludo }) => {
    return (
        <Fragment>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicación</p>
        </Fragment>
    );
}

PrimeraApp.prototypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;