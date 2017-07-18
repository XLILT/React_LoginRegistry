import React, { Component } from 'react';
import './bootstrap-3.3.6/css/bootstrap.css';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true,
        };
    }

    handleSelect(isSelectLogin) {
        this.setState({
            isLogin: isSelectLogin,
        });


    }

    render() {
        var loginCls = this.state.isLogin ? "active" : "";
        var registryCls = this.state.isLogin ? "" : "active";

        var loginFormCls = this.state.isLogin ? "" : "hidden";
        var registryFormCls = this.state.isLogin ? "hidden" : "";

        return (
            <div>
                <div className="login-registry container">
                    <nav className="navbar navbar-default">
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                            {/*<ul className="nav nav-pills">*/}
                                <li className={loginCls} onClick={() => this.handleSelect(true)}><a href="#">登陆</a></li>
                                <li className={registryCls} onClick={() => this.handleSelect(false)}><a href="#">注册</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="App container">
                    <div className={loginFormCls}>
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
                    <div className={registryFormCls}>
                        <form className="form-registry">
                            <h2 className="form-registry-heading">Please Registry</h2>
                            <label htmlFor="inputEmailRegistry" className="sr-only">Email address</label>
                            <input type="email" id="inputEmailRegistry" className="form-control" placeholder="Email address" required autoFocus />
                            <label htmlFor="inputPasswordRegistry" className="sr-only">Password</label>
                            <input type="password" id="inputPasswordRegistry" className="form-control" placeholder="Password" required />
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Registry</button>
                        </form>
                    </div>
                </div>
            </div>                
        );
    }
}

export default App;
