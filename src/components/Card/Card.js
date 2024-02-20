import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.scss'



const Card = ({count, p1, setCount, foe, setFoe}) => {
    const [randomCards, setRandomCards] = useState([]);
    const [deck, setDeck] = useState([]);

    const [imgVisible, setImgVisible] = useState(false);
    console.log(typeof setCount)


    // ---------------------------------------------------------------------------------------------------------------------------------
    function attackFunc() {
        if(count > 3){
            alert('pick another card')
        } else{
            const newHp = Number(foe[0].health) - Number(p1.attack);
            if (newHp <= 0) {
                setFoe(prevFoe => prevFoe.slice(1));
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
                }, 200);
            }
        setCount(count + 1);
        }
    }
//     function healFunc(index){
//         if(count > 3){
//             alert('pick another card')
//         }else {
//             const healing = Number(playerHealth)+10 
//             setPlayerHealth(healing)   
//             console.log(healing)
//             setCount(count+2)
//             setImgHeal(true); // Set the state to display the img
//             setTimeout(() => {
//                 setImgHeal(false); // Set the state to hide the img
//             }, 200);
//         }
//         console.log(index)
//     }
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

//     function attackUp(){
//         if(count > 3){
//             alert('pick another card')
//         } else{

//             const atkUp = Number(p1.attack)+10 
//             console.log(atkUp)
//             setP1({ ...p1, attack: atkUp })
//             setCount(count + 2);
//         }
//     }



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
                        <button onClick={() => {attackFunc()}}>
                            {p1.attack}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;