import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

import Header from '../../components/Header/Header'
import './Deck.scss'



function Deck(){
    const [deck, setDeck] = useState(null)




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cards');
                setDeck(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);
    return (
        <>
        <Header/>
        <div className='deck'>
            {deck !==null && deck.map((card, index) => (
                <div className="deck-card" key={index}>
                    <h3 className="deck-cost">{card.cost}</h3>
                    <div className="deck-bar">
                        <div className="deck-description">{card.effect}
                        </div>
                        <button>
                        {card.description}
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default Deck