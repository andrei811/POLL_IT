import OneCard from "./OneCard"

function CardsList(props) {
    if (props.cards.length === 0) {
        return (
            <div>
                <h2>No options</h2>
            </div>
        );
    }
    console.log("Length", props.cards.length)

    return (
        <div className="cardsList">
            <ul className="cardsList">
                {props.cards.map((card) => {
                    return (<OneCard Question={card.Question} Options={card.Options} />);
                })}
            </ul>
        </div>
    );
}

export default CardsList;