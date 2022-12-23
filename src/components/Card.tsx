'use strict';

export interface CardProps {
    id: string
}

export function Card(props: CardProps): React.ReactElement {
    const [setName, cardName] = props.id.split(':');
    const imgUrl = `https://dominionrandomizer.com/img/cards/${setName}_${cardName}.jpg`
    return (
        <>
            <img src={imgUrl} />
        </>
    );
}

export default Card;