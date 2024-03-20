import { useState, useEffect } from "react";
import axios from "axios";

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
        return <p>Loading...</p>;
    }
    // console.log(hero)
    // console.log(hero[0].portrait_url)

    
    return(
        <div className='heroes-selected'>
            <img src={hero[0].portrait_url} alt='sorry' width='300px' height='400px'/>
        </div>    
    )
}

export default Select;


