import React from 'react';
import {Home} from './components/Home';
import {AddBadge} from './components/AddBadge';
import {EditBadge} from './components/EditBadge';


function App() {
  return (
    <div className="App">
      <h1>Merit Badge Tracker</h1>
      <Home />
      <AddBadge />
      <EditBadge />
    </div>
  );
}

export default App;
