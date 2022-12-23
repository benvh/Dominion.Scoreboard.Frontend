'use strict';

import Card from "src/models/card";

export interface CardProps {
    card?: Card
}

export function SupplyCard(props: CardProps): React.ReactElement {
    if (props.card && props.card.id.length > 0) {
        const [setName, cardName] = props.card.id.split(':');
        const imgUrl = `https://dominionrandomizer.com/img/cards/${setName}_${cardName}.jpg`
        return (
            <img className="supply-card" src={imgUrl} />
        );
    } else {
        return (
            <div className="supply-card supply-card--empty"><span>?</span></div>
        );
    }
}

export default SupplyCard;