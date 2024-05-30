import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { attackFunc, ultimateFunc, healFunc,draw, attackAll, attackUp,defenseUp } from '../../utils/cardUtils';
import Alert from '../Alert/Alert';
import './Card.scss'




const Card = ({
    count,setCount, 
    foe, setFoe,
    turn, round,
    hero,setHero
    }) => {
    const [randomCards, setRandomCards] = useState([]);
    const [deck, setDeck] = useState([]);
    const navigate = useNavigate()
    const { characterId } = useParams();
    const [animationMove,setAnimationMove] = useState(null)
    let hand = 5



// console.log(deck)
function handleEffect(effect,cost,animation,id) {
    switch (effect) {
        case 'attack':
            attackFunc(count, foe, hero, setFoe, setCount,cost);
            // return animation ? setAnimationMove(animation): false;
            if(animation){
                setAnimationMove(animation)
            }
            setTimeout(() => {
                setAnimationMove(false);
            }, 1000);
            break;
        case 'attackall':
            attackAll(count, hero, setFoe, setCount,cost);
            if(animation){
                setAnimationMove(animation)
            }
            setTimeout(() => {
                setAnimationMove(false);
            }, 1000);
            break;
        case 'ultimate':
            ultimateFunc(count, foe, hero, setFoe, setCount,cost);
            if(animation){
                setAnimationMove(animation)
            }
            setTimeout(() => {
                setAnimationMove(false);
            }, 1000);
            break;
        case 'heal':
            healFunc(count, hero, setHero, setCount,cost); 
            if(animation){
                setAnimationMove(animation)
            }
            setTimeout(() => {
                setAnimationMove(false);
            }, 1000);
            break;
        case 'atkbuff':
            attackUp(count, hero, setHero, setCount,cost);
            if(animation){
                setAnimationMove(animation)
            }
            setTimeout(() => {
                setAnimationMove(false);
            }, 1000); // Call the defense function
            break;
        case 'defbuff':
            defenseUp(count,hero,setHero, setCount,cost); 
            if(animation){
                setAnimationMove(animation)
            }
            setTimeout(() => {
                setAnimationMove(false);
            }, 1000);// Call the defense function
            break;
        case 'draw':
            draw(count, deck, setRandomCards, setCount,cost);
            if(animation){
                setAnimationMove(animation)
            }
            setTimeout(() => {
                setAnimationMove(false);
            }, 1000); // Call the defense function
            break;
        // Add more cases for other effects as needed
        default:
            console.error(`Unknown effect: ${effect}`);
    }
    setRandomCards(prevCards => prevCards.filter(card => card.id !== id));
}



// -------------------------------------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/cards/${characterId}`);
                setDeck(response.data);
                // console.log(response.data)

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
                effect: card.type,
                description: card.description,
                animation : card.animation_url || null,
                id : card.card_id
            }));
            setRandomCards(selectedCards);
        }
    }, [deck, turn, round]);

    return (
        <>
        <div>
            {animationMove && (
                <img src={animationMove} className='animation'/>
            )}
        </div>
        <div className='hand'>
            {randomCards.map((card) => (
                <div className="card" key={card.id}>
                    {card.id}
                    <h3 className="cost">{card.cost}</h3>
                    <div className="bar">
                        <div className="description">{card.description}
                        </div>
                        <button onClick={() => handleEffect(card.effect, card.cost,card.animation,card.id)}>
                        {card.effect}
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Card;