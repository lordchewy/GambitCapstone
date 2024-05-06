import { useState, useEffect } from "react";
import axios from "axios";
import './Select.scss'

import atk from '../../assets/Images/attack.png'
import def from '../../assets/Images/defense.png'

function Select({characterId}){
    const [hero, setHero] = useState(null)
    const getHero = async (characterId) => {
        try {
            const response = await axios.get(`http://localhost:8080/characters/${characterId}`);
            setHero(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(()=> {
        getHero(characterId);
    }, [characterId]);

    if (hero === null) {
        return <p></p>;
    }
    // console.log(hero)
    // console.log(hero[0].portrait_url)

    
    return(
        <div className='heroes-selected'>
            <img src={hero[0].portrait_url} alt='sorry' width='300px' height='400px'/>
            <div>
                <p>{hero[0].name}</p>
                <p>{hero[0].health}</p>
                <p>{hero[0].attack}<img src={atk} className='stat'/></p>
                <p>{hero[0].defense}<img src={def} className='stat'/></p>
                <p>{hero[0].agility}</p>
            </div>     
        </div>    
    )
}

export default Select;


