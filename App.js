import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { LoginModal } from './components/LoginModal.js';
import { RoomHistoryPage } from './pages/RoomHistoryPage.js';
import {MapViewPage} from './pages/MapViewPage.js';
import {CreateAssignmentModal} from './components/CreateAssignmentModal.js';


function App() {
  return (
    <>
    <Router>
      <Route path="/sign-in" component={LoginModal }></Route>
      <Route path="/room-history" component={RoomHistoryPage } exact></Route>
      <Route path="/map-view" component={MapViewPage} exact></Route>
      <Route path="/create-assignment" component={CreateAssignmentModal} exact></Route>
      <Route path="/" component={LoginModal }exact></Route>
      
    </Router>
    </>
  );
}

export default App;
