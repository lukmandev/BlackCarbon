import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reducer';

import './styles/burger.css';
import './styles/edit-profile.css';
import './styles/global.css';
import './styles/icons.css';
import './styles/index.css';
import './styles/404.css';
import './styles/profile.css';



const app = (
	<Provider store={store}>
	  	<Router>
	    	<App />
	    </Router>
	</Provider>
);



ReactDOM.render(app, document.getElementById('root'));


reportWebVitals();
