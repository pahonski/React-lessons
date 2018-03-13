import React from 'react';
import Menu from '../components/Menu';
import MainContent from "../components/MainContent";

class Container extends React.Component
{
    render() {
        return <div className="container">
            <Menu/>
            <MainContent/>
        </div>
    }
}

export default Container;