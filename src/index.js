// import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

import { makeMainRoutes } from './routes'

/* 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
 */
const routes = makeMainRoutes()

ReactDOM.render(
  routes,
  document.getElementById('root')
)
