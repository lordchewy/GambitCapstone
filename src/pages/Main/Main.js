import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


import Header from "../../components/Header/Header"
import Select from "../../components/Select/Select";

// import Select from "../../components/Select/Select";
import './Main.scss'


function Main() {
    const [characters, setCharacters] = useState(null);
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

        // const audio = new Audio('../../assets/Images/sound.mp3');
        // audio.play();
        

    return (
        <div className="main">
            <div>
                <Header/>
            </div>
            <div className="heroes">
                <Select characterId={selectedHero}/>
                <ul className="heroes-option">
                    {filteredHeroes.map(hero => (
                        <Link to={`/${hero.hero_id}`}>
                        <li key={hero.hero_id} className="heroes-option__other">
                            {hero.playable && <img src={hero.portrait_url} width='150px' height='200px' alt={hero.name} />}
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default Main;