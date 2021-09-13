import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

    const [user, setuser] = useState('');
    const [password, setpassword] = useState('')

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard" exact>
                        <Home user={user} password={password} />
                    </Route>
                    <Route path="/" exact>
                        <Login setuser={setuser} setpassword={setpassword} />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
