'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

module.exports = function () {
    class Name extends React.Component
    {
        render() {
            return <p>Павел Дмитрич</p>
        }
    }

    ReactDOM.render(
        <Name/>,
        document.getElementById('root')
    );
};