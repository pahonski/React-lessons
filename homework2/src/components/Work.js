'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

module.exports = function () {
    class Work extends React.Component
    {
        render() {
            return <p>Работаю на шульговича</p>
        }
    }

    ReactDOM.render(
        <Work/>,
        document.getElementById('root')
    );
};