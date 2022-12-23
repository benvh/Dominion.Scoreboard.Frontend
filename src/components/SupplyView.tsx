'use strict';

import * as React from 'react';
import SupplyCard from './SupplyCard';
import Card from '../models/card';


interface SupplyViewProps {
    cards: Card[]
}

function SupplyView(props: SupplyViewProps) : React.ReactElement {
    return (
        <div className="supply-view">
            <div className="supply-view_card-row">
                {props.cards.slice(0, 5).map((c, i) => {
                    return <SupplyCard key={c.id || `anoncard${i}`} card={c} />
                })}
            </div>
            <div className="supply-view_card-row">
                {props.cards.slice(5, 10).map((c, i) => {
                    return <SupplyCard key={c.id || `anoncard${i}`} card={c} />
                })}
            </div>
        </div>
    );
}

export default SupplyView;