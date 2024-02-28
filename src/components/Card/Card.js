import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Card.scss'
import slash from '../../assets/Images/slash.png'



const Card = ({count, p1, setCount, foe, setFoe, health,setP1Health,setP1,turn, 
    setImgVisible, setImgHeal
}) => {
    const [randomCards, setRandomCards] = useState([]);
    const [deck, setDeck] = useState([]);
    const navigate = useNavigate()
    // console.log(typeof setCount)
    // console.log(health)
    let hand = 5
    console.log(deck)


    // ---------------------------------------------------------------------------------------------------------------------------------
    function attackFunc() {
        if(count > 5){
            alert('pick another card')
        } else{
            const newHp = Number(foe[0].health) - Number(p1.attack);
            if (newHp <= 0 || foe[0] === undefined) {
                    alert('you win!');
                    navigate('/');

            } else {
                setFoe(prevFoe => [{ ...prevFoe[0], health: newHp }, ...prevFoe.slice(1)]);
            }
            const specificFoeElement = document.getElementById(0);
            if (specificFoeElement) {
                setImgVisible(true); // Set the state to display the img
                specificFoeElement.classList.add('flash');
                setTimeout(() => {
                    specificFoeElement.classList.remove('flash');
                    setImgVisible(false); // Set the state to hide the img
                }, 400);
            }
        setCount(count + 1);
        }
    }


    function healFunc(){
        if(count > 3){
            alert('pick another card')
        }else {
            const healing = Number(health) + 2;
            setP1Health(healing);
            setCount(count+2)
            setImgHeal(true); // Set the state to display the img
            setTimeout(() => {
                setImgHeal(false); // Set the state to hide the img
            }, 200);
        }
    }


    function draw(){
        if(count > 5){
            alert('pick another card')
        }else {
            const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
            const selectedCards = shuffledDeck.slice(0, 3).map(card => ({
                cost: card.cost,
                effect: card.effect,
                description: card.description

            }));
            console.log(selectedCards)
            setRandomCards(prevCards => [...prevCards, ...selectedCards]);
            setCount(count+2)
    }}
// // 
//     function attackAll() {
//         if(count > 2){
//             alert('pick another card')
//         }else{
//             setFoe(prevFoe => {
//                 return prevFoe.map(fo => {
//                     const newHp = fo.health - p1.attack; // Adjust health based on player's attack
//                     console.log('attack all: ', newHp);
//                     // Check if health is less than or equal to 0
//                     if (newHp <= 0) {
//                         return null; // If health is 0 or less, mark for removal
//                     } else {
//                         return { ...fo, health: newHp }; // Otherwise, update health
//                     }
//                 }).filter(Boolean); // Filter out null elements
//             });
//             setCount(count+3)
//         }
//     }

    function attackUp(){
        if(count > 3){
            alert('pick another card')
        } else{

            const atkUp = Number(p1.attack)+1 
            // console.log(atkUp)
            setP1({ ...p1, attack: atkUp })
            setCount(count + 2);
        }
        return
    }
// ------------------------------------
function handleEffect(effect) {
    switch (effect) {
        case 'attack' || 'attackAll':
            attackFunc();
            return(<p>
                {p1.attack}
            </p>)
            // Call the attack function
            break;
        case 'heal':
            healFunc(); // Call the defense function
            break;
        case 'buff':
            attackUp(); // Call the defense function
            break;
        case 'draw':
            draw(); // Call the defense function
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