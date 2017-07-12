import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './router/router';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import logger from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createHistory();

const reduxRouterMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(
      applyMiddleware(
        logger,
        reduxRouterMiddleware
      ),
    )
);

ReactDOM.render(
  <Provider store={store}>
     <Router history={history}> 
       {routes} 
     </Router> 
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
