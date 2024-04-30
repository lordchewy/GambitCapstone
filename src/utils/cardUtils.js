//basic attack card
export function attackFunc(count, enemies, setEnemies, setCount, cost, player) {
    // Check if count exceeds the limit
    if (count > 5) {
        alert('Pick another card.');
    } else {
        // Increase the count
        setCount(count + 1);

        // Calculate new health for the first enemy
        const newHp = enemies[0].health - player.attack;
        console.log(newHp)

        // Update the health of the first enemy if its health is greater than 0
        if (newHp > 0) {
            const updatedEnemies = [...enemies]; // Create a copy of the enemies array
            updatedEnemies[0] = { ...updatedEnemies[0], health: newHp }; // Update the health of the first enemy
            setEnemies(updatedEnemies); // Set the updated enemies array in state
        } else {
            // Handle the case when the enemy's health reaches 0 or below
            // You can remove the enemy from the array or perform any other desired action
        }
    }
}

    //     const newHp = Number(foe.health) - Number(hero.attack -foe[0].defense);
    //     console.log(newHp)
    //     setFoe({ ...foe[0], health: newHp });
    //     if (newHp <= 0 || foe[0] === undefined) {
    //         setFoe({...foe, health:newHp});
    //     } else {
    //         setFoe({...foe, health:newHp});
    //     }


        // const specificFoeElement = document.getElementById(0);
        // if (specificFoeElement) {
        //     setImgVisible(true); // Set the state to display the img
        //     specificFoeElement.classList.add('flash');
        //     setTimeout(() => {
        //         specificFoeElement.classList.remove('flash');
        //         setImgVisible(false); // Set the state to hide the img
        //     }, 400);
        // }
    // setCount(count + cost);
    // }














//ultimate card
export function ultimateFunc(count, foe, hero, setFoe, setImgUlt, setCount,cost) {
    if (count > 3) {
        alert('pick another card');
    } else {
        const newHp = Number(foe[0]?.health) - 4 * Number(hero.attack);
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
export function healFunc(count, hero,setHero, setCount, setImgHeal, cost) {
    if (count > 3) {
        alert('pick another card');
    } else {
        const healing = Number(hero.health) + 2;
        setHero({...hero, health:healing})
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
export function attackUp(count, hero, setHero, setCount,cost) {
    if (count > 3) {
        alert('pick another card');
    } else {
        const atkUp = Number(hero.attack) + 1;
        setHero({ ...hero, attack: atkUp });
        setCount(count + cost);
    }
}
// buff def card
export function defenseUp(count, hero, setHero, setCount,cost){
    if(count > 3){
        alert('pick another card')
    } else{
        const defUp = Number(hero.defense)+1 
        setHero({ ...hero, defense: defUp })
        setCount(count + cost);
    }
    return
}




