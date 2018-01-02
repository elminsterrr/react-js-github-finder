import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import './index.css';

const storeWithMiddleware = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={storeWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
