/**
 * Created by chenjinxin on 2017/3/25.
 */
import * as React from 'react';
import { Route } from 'react-router';
import App from '../pages/App';

// const Home = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('../pages/home/home').default)
//   },'Home')
// };

const routes = (
    <Route path="/" component={App}/>
);
  
export default routes;
