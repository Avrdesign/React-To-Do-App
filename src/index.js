import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Field from './Field';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Field />, document.getElementById('root'));
registerServiceWorker();
