import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


import Header from "../../components/Header/Header"
// import Select from "../../components/Select/Select";


import './Main.scss'
import atk from '../../assets/Images/attack.png'
import def from '../../assets/Images/defense.png'
import agl from '../../assets/Images/agility.png'
import hp from '../../assets/Images/health.png'


function Main() {
    const [characters, setCharacters] = useState(null);
    const [selector, setSelector] = useState(false)
    const [toggle,setToggle ] = useState(false)
    const { characterId } = useParams();

    // console.log('here is the character id on main: ', characterId)

    const getCharacters = async () => {
        try {
            const response = await axios.get('http://localhost:8080/characters');
            const data = response.data
            const playableHeroes = data.filter(hero => hero.playable === "1");
            // console.log(playableHeroes);

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

    const selectedHero = (id) => { setToggle(id)}

    return (
        <div className="main">
            <div>
                <Header selector={selector} setSelector={setSelector}/>
            </div>

            <div className="heroes">
            {selector && 
            <div className="begin">
                <ul className="heroes-option">
                    {characters.map(hero => (
                        <li key={hero.hero_id} >
                            <Link to={`/${hero.hero_id}`} >
                            
                            <div 
                            className={`heroes-selected ${toggle ===hero.hero_id ? 'glow' : ''}`}

                            onClick={()=> selectedHero(hero.hero_id)}>
                                <img src={hero.portrait_url} alt='sorry' width='300px' height='400px'/>
                                <div>
                                    <p>{hero.name}</p>
                                    <p>{hero.health}<img src={hp} className='stat' alt="stat"/></p>
                                    <p>{hero.attack}<img src={atk} className='stat' alt="stat"/></p>
                                    <p>{hero.defense}<img src={def} className='stat' alt="stat"/></p>
                                    <p>{hero.agility}<img src={agl} className='stat' alt="stat"/></p>
                                </div>     
                            </div>    
                            
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to={`/board/${characterId}`}>Start Game</Link>
                </div>
            }
            </div>
        </div>
    );
}


export default Main;