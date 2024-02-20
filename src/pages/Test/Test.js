import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Test.scss'

const Test = () => {
    const [randomCards, setRandomCards] = useState([]);
    const [deck, setDeck] = useState([]);

    const clicked = () => {console.log('clicked')}

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/card');
                setDeck(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (deck.length > 0) {
            const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
            const selectedCards = shuffledDeck.slice(0, 5).map(card => ({
                title: `Card ${card.id}`,
                cost: 2,
                effect: card.effect
            }));
            setRandomCards(selectedCards);
        }
    }, [deck]);
    console.log(deck)

    return (
        <div className='hand'>
            {randomCards.map((card, index) => (
                <div className="card" key={index}>
                    <h3 className="title">{card.title}</h3>
                    <div className="bar">
                        <div className="filledbar">Effect: {card.effect}
                        </div>
                        <button onClick={() => {clicked()}}>
                            click here
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Test;
