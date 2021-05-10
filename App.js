import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginModal } from '../src/pages/Login/LoginModal.js';
import { RoomHistoryPage } from './pages/RoomHistory/RoomHistoryPage.js';
import { MapViewPage } from './pages/MapView/MapViewPage.js';
import { CreateAssignmentModal } from './components/CreateAssignmentModal/CreateAssignmentModal.js';
import { CurrentUserProvider } from './context/CurrentUserContext.js'

function App() {
	return (
		<Router>
			<CurrentUserProvider>
				<Route path='/sign-in' component={LoginModal}></Route>
				<Route
					path='/room-history'
					component={RoomHistoryPage}
					exact></Route>
				<Route path='/map-view' component={MapViewPage} exact></Route>
				<Route
					path='/create-assignment'
					component={CreateAssignmentModal}
					exact></Route>
				<Route path='/' component={LoginModal} exact></Route>
			</CurrentUserProvider>
		</Router>
	);
}

export default App;
