import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import ToolBar from "../../components/ToolBar/ToolBar";
import Header from "../../components/Header/Header";
import './Board.scss'

function Board(){


    const [count, setCount] = useState(0);
    const { characterId } = useParams();
    const [hero, setHero] = useState(null);

    const getHero = async (characterId) => {
        try {
            const response = await axios.get(`http://localhost:8080/characters/${characterId}`);
            setHero(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getHero(characterId);
    }, [characterId]);


    useEffect(() => {
        if (count > 4) {
            // Alert indicating enemy turn need to summon modal here
            alert('enemy turn');
    
            // Update hero's health by reducing it by 10, need to change this as it's not working
            setHero(prevHero => {
                return { ...prevHero, health: prevHero.health - 10 };
            });
    
            // Reset count after 200 milliseconds
            setTimeout(() => {
                setCount(0);
            }, 200);
        }
    }, [count]);
    

    if (hero === null) {
        return <p>Loading...</p>;
    }

    


    return (
        <div className="board">
            <Header/>
            <ToolBar
            // enemyTurn={enemyTurn}  
            count={count}  setCount={setCount}
            player={hero.name} health={hero.health} attack={hero.attack} portrait={hero.portrait}
            />
        </div>
    )
}
export default Board;