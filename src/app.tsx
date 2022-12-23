'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import SupplyCard from './components/SupplyCard';
import SupplyView from './components/SupplyView';


function App() : React.ReactElement {

    const cards = [
        {id: "baseset2:cellar"},
        {id: "baseset2:councilroom"},
        {id: "baseset2:gardens"},
        {id: "baseset2:harbinger"},
        {id: "baseset2:militia"},
        {id: "baseset2:poacher"},
        {id: "baseset2:remodel"},
        {id: "baseset2:throneroom"},
        {id: "baseset2:vassal"},
        {id: ""},
    ];

    return (
        <SupplyView cards={cards}/>
    );
}


const rootEl = ReactDOM.createRoot(document.getElementById('content'));
rootEl.render(<App/>);