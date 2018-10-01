import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import 'styles/base.scss';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-126745807-1');
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
