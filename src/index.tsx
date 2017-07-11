import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/App';
// import { Router, hashHistory } from 'react-router';
import store from './stores/configureStore';
// import routes from './router/router';
// import { syncHistoryWithStore } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// const history = syncHistoryWithStore(hashHistory, store);

// history.listen(function (location: any) { return location });

ReactDOM.render(
  <Provider store={store}>
      <App/>
      {/*<Router history={history}>*/}
        {/*{ routes }*/}
      {/*</Router>*/}
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
