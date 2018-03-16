import React from 'react';
import {Link} from 'react-router';


class Footer extends React.Component
{
    render() {
        return <div>
            <h3>Footer</h3>
            <Link to="/info">Основная информация</Link>
        </div>
    }
}

export default Footer;