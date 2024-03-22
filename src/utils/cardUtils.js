//basic attack card
export function attackFunc(count, foe, p1, setFoe, setImgVisible, setCount,cost) {
    if(count >= 5){
        alert('pick another card')
    } else{
        const newHp = Number(foe[0].health) - Number(p1.attack -foe[0].defense);
        setFoe(prevFoe => [{ ...prevFoe[0], health: newHp }, ...prevFoe.slice(1)]);
        if (newHp <= 0 || foe[0] === undefined) {
            setFoe(prevFoe => prevFoe.slice(1));
        } else {
            setFoe(prevFoe => [{ ...prevFoe[0], health: newHp }, ...prevFoe.slice(1)]);
        }
        const specificFoeElement = document.getElementById(0);
        if (specificFoeElement) {
            setImgVisible(true); // Set the state to display the img
            specificFoeElement.classList.add('flash');
            setTimeout(() => {
                specificFoeElement.classList.remove('flash');
                setImgVisible(false); // Set the state to hide the img
            }, 400);
        }
    setCount(count + cost);
    }
}
//ultimate card
export function ultimateFunc(count, foe, p1, setFoe, setImgUlt, setCount,cost) {
    if (count >= 3) {
        alert('pick another card');
    } else {
        const newHp = Number(foe[0]?.health) - 4 * Number(p1.attack);
        setFoe(prevFoe => {
            const updatedFoe = [{ ...prevFoe[0], health: newHp }, ...prevFoe.slice(1)];
            if (newHp <= 0 || foe[0] === undefined) {
                return updatedFoe.slice(1);
            } 
            else {
                return updatedFoe;
            }
        });
        const specificFoeElement = document.getElementById(0);
        if (specificFoeElement) {
            setImgUlt(true); // Set the state to display the img
            specificFoeElement.classList.add('flash');
            setTimeout(() => {
                specificFoeElement.classList.remove('flash');
                setImgUlt(false); // Set the state to hide the img
            }, 1000);
        }
        setCount(count + cost);
    }
}
//heal card
export function healFunc(count, health, setP1Health, setCount, setImgHeal, cost) {
    if (count > 3) {
        alert('pick another card');
    } else {
        const healing = Number(health) + 2;
        setP1Health(healing);
        setCount(count + cost);
        setImgHeal(true); // Set the state to display the img
        setTimeout(() => {
            setImgHeal(false); // Set the state to hide the img
        }, 600);
    }
}

// draw cards from deck
export function draw(count, deck, setRandomCards, setCount,cost) {
    if (count > 5) {
        alert('pick another card');
    } else {
        const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
        const selectedCards = shuffledDeck.slice(0, 3).map(card => ({
            cost: card.cost,
            effect: card.effect,
            description: card.description
        }));
        setRandomCards(prevCards => [...prevCards, ...selectedCards]);
        setCount(count + cost);
    }
}
// attack all card
export function attackAll(count, p1, setFoe, setCount,cost) {
    if (count > 5) {
        alert('pick another card');
    } else {
        setFoe(prevFoe => {
            return prevFoe.map(fo => {
                const newHp = fo.health - Number(p1.attack - fo.defense); // Adjust health based on player's attack
                // console.log('attack all: ', newHp);
                // Check if health is less than or equal to 0
                if (newHp <= 0) {
                    return null; // If health is 0 or less, mark for removal
                } else {
                    return { ...fo, health: newHp }; // Otherwise, update health
                }
            }).filter(Boolean); // Filter out null elements
        });
        setCount(count + cost);
    }
}
// atk buff card
export function attackUp(count, p1, setP1, setCount,cost) {
    if (count > 3) {
        alert('pick another card');
    } else {
        const atkUp = Number(p1.attack) + 1;
        setP1({ ...p1, attack: atkUp });
        setCount(count + cost);
    }
}
// buff def card
export function defenseUp(count, p1, setP1, setCount,cost){
    if(count > 3){
        alert('pick another card')
    } else{
        const defUp = Number(p1.defense)+1 
        setP1({ ...p1, defense: defUp })
        setCount(count + cost);
    }
    return
}




