import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { LoginModal } from './components/LoginModal.js';
import { RoomHistoryPage } from './pages/RoomHistoryPage.js';
import {MapViewPage} from './pages/MapViewPage.js';
import {CreateAssignmentModal} from './components/CreateAssignmentModal.js';
import { MainFooter } from './components/MainFooter.js';
import { MainNavBar } from './components/MainNavBar.js';

function App() {
  return (
    <>
    <Router>
      <Route path="/sign-in" component={LoginModal }></Route>
      <Route path="/room-history" component={RoomHistoryPage }></Route>
      <Route path="/map-view" component={MapViewPage}></Route>
      <Route path="/create-assignment" component={CreateAssignmentModal}></Route>
      <Route path="/floor-plan"></Route>
    </Router>
    </>
  );
}

export default App;
