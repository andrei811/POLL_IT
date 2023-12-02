import CardsList from "./CardList";

function AllCards() {
    const cardsArr = [
        {
            Question: "Ce animal se afla pe tricoul departamentului de IT?",
            Options: ["un elefant", "o testoasa", "un lenes", "un caine"]
        },
        {
            Question: "Ce animal se afla pe tricoul departamentului de IT?",
            Options: ["un elefant", "o testoasa", "un lenes", "un caine"]
        },
        {
            Question: "Ce animal se afla pe tricoul departamentului de IT?",
            Options: ["un elefant", "o testoasa", "un lenes", "un caine"]
        },
        {
            Question: "Ce animal se afla pe tricoul departamentului de IT?",
            Options: ["un elefant", "o testoasa", "un lenes", "un caine"]
        },
        {
            Question: "Ce animal se afla pe tricoul departamentului de IT?",
            Options: ["un elefant", "o testoasa", "un lenes", "un caine"]
        },
    ];
    console.log(cardsArr)
    return (<CardsList cards={cardsArr} />);
}

export default AllCards;