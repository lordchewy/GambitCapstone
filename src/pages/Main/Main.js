import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


import Header from "../../components/Header/Header"
// import Select from "../../components/Select/Select";
import './Main.scss'


function Main() {
    const [characters, setCharacters] = useState(null);
    const { characterId } = useParams();

    // console.log(characterId)

    const getCharacters = async () => {
        try {
            const response = await axios.get('http://localhost:8080/characters');
            setCharacters(response.data);
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

    let selectedHero = characterId || characters[0].id

    
        
    const filteredHeroes = characters.filter((character)=>{
        return selectedHero !== character.id;})

    return (
        <div className="main">
            <Header />
            <div className="heroes">
                {/* <div className='heroes-selected'>
                    <img src={selectedHero} alt={selectedHero.name} width='300px' height='400px'/>
                </div> */}
                <ul className="heroes-option">
                    {filteredHeroes.map(hero => (
                        <Link to={`/${hero.id}`}>
                        <li key={hero.id} className="heroes-option__other">
                            {hero.playable && <img src={hero.portrait} width='150px' height='200px' alt={hero.name} />}
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
            {/* <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div> */}
        </div>
    );
}


export default Main;