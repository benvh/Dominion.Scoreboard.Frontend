'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import Card from './components/Card';


function App() : React.ReactElement {
    return (
        <Card id="baseset2:cellar"/>
    );
}


const rootEl = ReactDOM.createRoot(document.getElementById('content'));
rootEl.render(<App/>);