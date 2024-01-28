import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


import Header from "../../components/Header/Header"
import Select from "../../components/Select/Select";
import './Main.scss'


function Main() {
    const [characters, setCharacters] = useState(null);
    const [selectedHeroId, setSelectedHeroId] = useState(null);
    const { characterId } = useParams();

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const response = await axios.get('http://localhost:8080/characters');
                setCharacters(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        getCharacters();
    }, []);

    if (characters === null) {
        return <p>Loading...</p>;
    }

    const changeHero = (heroId) => {
        setSelectedHeroId(heroId);
    };

    const selectedHero = characters.find(hero => hero.id === selectedHeroId) || characters.find(hero => hero.id === characterId) || characters[0];
    
    const filteredHeros = characters.filter((character)=>{
        return selectedHeroId !== character.id;
    })

    return (
        <div>
            <Header />
            <img src={selectedHero.portrait} width='400px' alt={selectedHero.name} />
            <ul className="main">
                {filteredHeros.map(hero => (
                    <li key={hero.id}>
                        {hero.playable && <img src={hero.portrait} width='200px' alt={hero.name} onClick={() => changeHero(hero.id)} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Main;