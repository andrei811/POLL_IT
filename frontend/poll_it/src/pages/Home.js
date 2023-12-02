import React from 'react';
import AllCards from '../components/Cards/AllCards';
// import OneCard from '../components/Cards/OneCard';

const Home = () => {
    const cardsArr = [
        {
            Question: "Ce animal se afla pe tricoul departamentului de IT?",
            Options: ["un elefant", "o testoasa", "un lenes", "un caine"]
        }
    ];
    return (
        <div>
            <h2 className='quote'>Opiniile sunt mai importante ca niciodata. Platformele de sondaje permit organizatorilor sa culeaga feedback direct de la audienta lor ca sa inteleaga mai bine nevoile si dorintele lor.</h2 >
            <AllCards />
        </div>
    );
};

export default Home;