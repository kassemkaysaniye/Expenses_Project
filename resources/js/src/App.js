import React from 'react'
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import EditC from './components/EditC';
import AddC from './components/AddC';

export default function App() {
    return (
        <Router className="App__Container">
            <Switch>
                <Route exact path="/">
                   <Home></Home>
                </Route>
                <Route exact path="/add">
                    <Add></Add>
                </Route>   
                <Route exact path="/addc">
                    <AddC></AddC>
                </Route>
                <Route exact path="/edit/:id">
                    <Edit></Edit>
                </Route> 
                <Route exact path="/editc/:id">
                    <EditC></EditC>
                </Route>                 
            </Switch>

        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));

