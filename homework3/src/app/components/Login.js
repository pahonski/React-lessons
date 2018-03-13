import React from 'react';

class Login extends React.Component
{
    render() {
        let loginStyle = {
            marginTop: '5px'
        };

        return <button style={loginStyle} type="button" className="btn btn-warning">Login</button>
    }
}

export default Login;