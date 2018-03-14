import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    render() {
        let myStyle = {
            color: this.props.color
        };

        console.log(this.props);
        return (
            <div>
                <h1 style={myStyle}>{this.props.text}</h1>
                <Link
                    title={this.props.text + ' - ссылка'}
                    href="./index.html"
                />
            </div>
        )
    }
}

class Link extends React.Component
{
    render() {
        return <a href={this.props.href}>{this.props.title}</a>
    }
}


const app = document.getElementById('app');

ReactDOM.render(
    <div>
        <App color="red" text="My Code (text)" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae commodi consequatur ducimus earum eos esse impedit, iusto labore libero maiores molestias nam odio optio, porro praesentium quaerat quis tempora?</p>
    </div>,
app);