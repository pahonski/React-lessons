import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Рады приветствовать Вас в нашем приложении на ReactJS</h1>
                <Link class="btn btn-primary btn-lg" to="/About">Узнать больше</Link>
            </div>
        );
    }
}