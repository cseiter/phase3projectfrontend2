import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddBadge} from './components/AddBadge';
import {EditBadge} from './components/EditBadge';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="text-center" style={{maxWidth: "50%", margin: "5px auto", border: "2px solid black"}}>
      <h1>Merit Badge Tracker</h1>
      <Router>
        <Switch>
          <Route path="/editbadge/:id" component={EditBadge} />
          <Route path="/addbadge" component={AddBadge} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
