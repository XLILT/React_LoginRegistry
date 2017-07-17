import React, { Component } from 'react';
import './bootstrap-3.3.6/css/bootstrap.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="login-registry container">
                    <nav className="navbar navbar-default">
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">登陆</a></li>
                                <li><a href="#">注册</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="App container">
                    <form className="form-signin">
                        <h2 className="form-signin-heading">Please sign in</h2>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>                
        );
    }
}

export default App;
