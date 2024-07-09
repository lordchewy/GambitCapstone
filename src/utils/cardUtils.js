
// //////////////////////////////card reformat for attack
// i want both hero and foes to be able to use cards
//cost is not being accounted for in this card version
export function attackFunc(target, user, setTarget) {
        // console.log(target)
        const newHp = Number(target.health) - Number(user.attack -target.defense);
        console.log('hp after attack',newHp)
        setTarget(prevTarget => [{ ...prevTarget[0], health: newHp }, ...prevTarget.slice(1)]);
        if (newHp <= 0 || target === undefined) {
            setTarget(prevTarget => prevTarget.slice(1));
        } else {
            setTarget(prevTarget => [{ ...prevTarget[0], health: newHp }, ...prevTarget.slice(1)]);
        }
}

export function ultimateFunc(target, user, setTarget) {
    // console.log(target)
    const newHp = Number(target.health) -4*Number(user.attack);
    console.log('hp after attack',newHp)
    setTarget(prevTarget => [{ ...prevTarget[0], health: newHp }, ...prevTarget.slice(1)]);
    if (newHp <= 0 || target === undefined) {
        setTarget(prevTarget => prevTarget.slice(1));
    } else {
        setTarget(prevTarget => [{ ...prevTarget[0], health: newHp }, ...prevTarget.slice(1)]);
    }
}

export function attackAll(user, setTarget) {
    setTarget(prevTarget => {
        return prevTarget.map(target => {
            const newHp = target.health - Number(user.attack - target.defense); // Adjust health based on player's attack
            // Check if health is less than or equal to 0
            if (newHp <= 0) {
                return null; // If health is 0 or less, mark for removal
            } else {
                return { ...target, health: newHp }; // Otherwise, update health
            }
        }).filter(Boolean); // Filter out null elements
    });
}


export function healFunc(user, setUser) {
    const healing = Number(user.health) + 2;
    setUser(prev => [{...prev[0], health:healing}])
}

export function attackUp(user, setUser) {
    const atkUp = Number(user.attack) + 1;
    setUser(prev => [{...prev[0], attack:atkUp}])
}


export function defenseUp(user, setUser) {
    const defUp = Number(user.defense) + 1;
    setUser(prev => [{...prev[0], defense:defUp}])
}
//////////////////////////////////////////////////////


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
