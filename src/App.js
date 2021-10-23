import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import './App.scss';

import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

import Home from './pages/Home/Home';

function App() {
  return (
	<Router>
		<div className="App">
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
			
			<NotificationContainer />
		</div>
	</Router>
  );
}

export default App;
