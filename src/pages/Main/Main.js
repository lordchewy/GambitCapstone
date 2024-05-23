import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


import Header from "../../components/Header/Header"
import Select from "../../components/Select/Select";

// import Select from "../../components/Select/Select";
import './Main.scss'
import atk from '../../assets/Images/attack.png'
import def from '../../assets/Images/defense.png'
import agl from '../../assets/Images/agility.png'
import hp from '../../assets/Images/health.png'


function Main() {
    const [characters, setCharacters] = useState(null);
    const [selecter, setSelecter] = useState(false)
    // const [selectedHero, setSelectedHero] = useState(characters[0].id)
    const { characterId } = useParams();

    // console.log('here is the character id on main: ', characterId)

    const getCharacters = async () => {
        try {
            const response = await axios.get('http://localhost:8080/characters');
            const data = response.data
            const playableHeroes = data.filter(hero => hero.playable === "1");
            console.log(playableHeroes);

            setCharacters(playableHeroes);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(()=> {
        getCharacters();
    }, [])

        


    if (characters === null) {
        return <p>Loading...</p>;
    }

    const selectedHero = characterId || characters
    // console.log(characters)

    const filteredHeroes = characters.filter((character)=>{
        return selectedHero !== character.hero_id;})

    return (
        <div className="main">
            <div>
                <Header selecter={selecter} setSelecter={setSelecter}/>
            </div>

            <div className="heroes">
            {selecter && 
            <>
                <ul className="heroes-option">
                    {filteredHeroes.map(hero => (
                        <Link to={`/${hero.hero_id}`}>
                        <li key={hero.hero_id}>
                        <div className='heroes-selected'>
                            <img src={hero.portrait_url} alt='sorry' width='300px' height='400px'/>
                            <div>
                                <p>{hero.name}</p>
                                <p>{hero.health}<img src={hp} className='stat'/></p>
                                <p>{hero.attack}<img src={atk} className='stat'/></p>
                                <p>{hero.defense}<img src={def} className='stat'/></p>
                                <p>{hero.agility}<img src={agl} className='stat'/></p>
                            </div>     
                        </div>    
                        </li>
                        </Link>
                    ))}
                </ul>
                <Link to={`/board/${characterId}`} className='link'>Start Game</Link>
                </>
            }
                {/* <Select characterId={selectedHero}/> */}
            </div>
        </div>
    );
}


export default Main;