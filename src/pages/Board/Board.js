import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import ToolBar from "../../components/ToolBar/ToolBar";
import Game from "../../components/Game/Game";
import Header from "../../components/Header/Header";
import './Board.scss'

import knight from '../../assets/Images/knight.png'
import viking from '../../assets/Images/viking.png'

function Board(){
    const { heroId } = useParams();
    const [count, setCount] = useState(0);
    const [hero,setHero] = useState(null)

    console.log(heroId)

        const getHero = async () => {
            try {
                const response = await axios.get('http://localhost:8080/characters/');
                setHero(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        useEffect(()=>{
            getHero(heroId);
        }, []);

        if (hero === null){
            return <p>loading</p>
        }

        console.log(hero)



    

    const characters = [
        {'id': 1, 'name': 'Alastor', health:100, 'attack': 15, 'url': knight},
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
            player={characters[0].name} health={characters[0].health} attack={characters[0].attack} hero={characters[0].url}
            enemy= {characters[1].name} enemyHealth={characters[1].health} enemyAttack={characters[1].attack} enemyHero={characters[1].url}
            turns={count}
            power={power}
            />
            <ToolBar power={power} turns={count}/>
        </div>
    )
}
export default Board;