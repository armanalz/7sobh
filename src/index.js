import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './resources/styles/style.css';
import Routes from './routes';

const App=()=>{
    return(
        <HashRouter>
            <Routes/>
        </HashRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));