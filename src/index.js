import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

 //axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
 //axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
 axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
        console.log(request);
        return request;
    }, error => { 
        console.log(error);
        return Promise.reject(error);
});

// axios.interceptors.response.use( response => {
//     console.log(response);
// },error => {
//     console.log(error);
//     return Promise.reject(error);
// })

ReactDOM.render( <App />, document.getElementById( 'root' ) );
serviceWorker.unregister();
