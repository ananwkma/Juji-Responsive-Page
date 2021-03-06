import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import App from './components/App';

const store = createStore(reducer, middleware)

ReactDOM.render(
	<Provider store={store}> 
		<App />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
