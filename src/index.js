import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import applyMiddleware from './middleware'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister();
