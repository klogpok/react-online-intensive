// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Catcher from '../../components/Catcher';
import Feed from '../../components/Feed';
import Profile from '../../components/Profile';
import StatusBar from '../../components/StatusBar';
import Login from '../../components/Login';
import { Provider } from '../../components/HOC/withProfile';

// Instruments
import avatar from '../../theme/assets/bob';

const options = {
    avatar,
    currentUserFirstName: 'Олег',
    currentUserLastName:  'Kleiman',
};

@hot(module)
export default class App extends Component {
    state = {
        login: false,
    }

    componentDidMount() {
        const login = window.localStorage.getItem('login') === 'true';

        this.setState({login});
    }

    onLogout = () => {
        this.setState({ login: false}, () => window.localStorage.setItem('login', 'false'));
    }

    onLogin = () => {
        this.setState({ login: true}, () => window.localStorage.setItem('login', 'true'));
    }

    render() {
        const { login } = this.state;

        return (
            <Catcher>
                <Provider value = { options }>
                    <StatusBar
                        login = { login }
                        onLogout = { this.onLogout }
                    />
                    <Switch>
                        <Route
                            path = '/login'
                            render = { (props) => (
                                <Login
                                    { ...props }
                                    onLogin = { this.onLogin }
                                />
                            ) }
                        />

                        <Route
                            path = '/profile'
                            render = { () => !login ? (
                                <Redirect to = '/login'/>
                            ) : (
                                <Profile />
                            ) }
                        />

                        <Route
                            component = { Feed }
                            path = '/feed'
                        />

                        <Redirect to = '/feed' />

                    </Switch>
                </Provider>
            </Catcher>
        );
    }
}
