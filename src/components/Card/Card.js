import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { attackFunc, ultimateFunc, healFunc,draw, attackAll, attackUp,defenseUp } from '../../utils/cardUtils';
import Alert from '../Alert/Alert';
import './Card.scss'




const Card = ({count, p1, setCount, foe, setFoe, health,setP1Health,setP1,turn, 
    setImgVisible, setImgHeal,setImgUlt
}) => {
    const [randomCards, setRandomCards] = useState([]);
    const [deck, setDeck] = useState([]);
    const navigate = useNavigate()
    let hand = 5




function handleEffect(effect) {
    switch (effect) {
        case 'attack':
            attackFunc(count, foe, p1, setFoe, setImgVisible, setCount);
            break;
        case 'attackall':
            attackAll(count, p1, setFoe, setCount);
            break;
        case 'ultimate':
            ultimateFunc(count, foe, p1, setFoe, setImgUlt, setCount);
            break;
        case 'heal':
            healFunc(count, health, setP1Health, setCount, setImgHeal); 
            break;
        case 'atkbuff':
            attackUp(count, p1, setP1, setCount); // Call the defense function
            break;
        case 'defbuff':
            defenseUp(count, p1, setP1, setCount); // Call the defense function
            break;
        case 'draw':
            draw(count, deck, setRandomCards, setCount); // Call the defense function
            break;
        // Add more cases for other effects as needed
        default:
            console.error(`Unknown effect: ${effect}`);
    }
}



// -------------------------------------------------------------------------
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
            const selectedCards = shuffledDeck.slice(0, hand).map(card => ({
                cost: card.cost,
                effect: card.effect,
                description: card.description

            }));
            setRandomCards(selectedCards);
        }
    }, [deck, turn]);
    // console.log(deck)

    return (
        <div className='hand'>
            {randomCards.map((card, index) => (
                <div className="card" key={index}>
                    <h3 className="cost">{card.cost}</h3>
                    <div className="bar">
                        <div className="description">{card.effect}
                        </div>
                        <button onClick={() => handleEffect(card.effect)}>
                        {card.description}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;