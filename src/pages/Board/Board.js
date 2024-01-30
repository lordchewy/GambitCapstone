import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import ToolBar from "../../components/ToolBar/ToolBar";
import Game from "../../components/Game/Game";
import Header from "../../components/Header/Header";
import './Board.scss'

// import knight from '../../assets/Images/knight.png'
import viking from '../../assets/Images/viking.png'

function Board(){
    const [count, setCount] = useState(0);
    const { heroId } = useParams();
    const [hero, setHero] = useState(null);

    const getHero = async (heroId) => {
        try {
            const response = await axios.get(`http://localhost:8080/characters/${heroId}`);
            setHero(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getHero(heroId);
    }, [heroId]);

    if (hero === null) {
        return <p>Loading...</p>;
    }

    console.log(hero);



    

    const characters = [
        {'id': 2, 'name': 'Krieg', health:120, 'attack': 8, 'url': viking}
    ]
    function power() {
        if (count < 5) {
            console.log(count);
            setCount(count+1)
        } else {
            console.log(count);
        }
    }



    
    return (
        <div className="board">
            <Header/>
            <Game 
            player={hero.name} health={hero.health} attack={hero.attack} hero={hero.portrait}
            enemy= {characters[0].name} enemyHealth={characters[0].health} enemyAttack={characters[0].attack} enemyHero={characters[0].url}
            turns={count}
            power={power}
            />
            <ToolBar power={power} turns={count}/>
        </div>
    )
}
export default Board;