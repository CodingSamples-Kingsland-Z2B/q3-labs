// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card 
//  T (S, H, D, C) is the type. 
//  Powers 2 to 10 have the same value and J to A are 11 to 14. 
// Types are mapped to multipliers the following way
// (S -> 4, H-> 3, D -> 2, C -> 1).
// Finally print out the total value each player has in his hand in the format:
// {personName}: {value}

function main(arr) {

    let map = new Map();

    // Constructing the Map
    arr.forEach(player => {
        let [playerName, cards] = player.split(': ');
        let cardsArr = cards.split(', ');
        if (!map.get(playerName)) {
            map.set(playerName, [...new Set(cardsArr)]);
        } else {
            let updatedArray = map.get(playerName).concat(cardsArr);
            updatedArray = [...new Set(updatedArray)];
            map.set(playerName, [...updatedArray]);
        }
    });

    //Loop through every player cards 
    let playersArr = Array.from(map);


    playersArr.forEach(player => {
        let sum = 0;
        player[1].forEach(card => {
            if (card.includes('10')) {

                //  sum += cardPower[card[0]] * cardType[card[1]] 
                sum += +typePowerConveror(card[2]) * 10;
            } else {
                sum += +typePowerConveror(card[0]) * +typePowerConveror(card[1]);
            }
        });
        console.log(`${player[0]}: ${sum}`);
    })
}


function typePowerConveror(ch) {
    switch (ch) {
        case 'S':
            return 4;
        case 'H':
            return 3;
        case 'D':
            return 2;
        case 'C':
            return 1;
        case 'J':
            return 11;
        case 'Q':
            return 12;
        case 'K':
            return 13;
        case 'A':
            return 14;
        default:
            return ch;
    }
}



main(
    ["Jack: 10C, 3H, 2S, QD, 7D, AS, 8D", "Juan: 3H, 10S, JC, KD, 5S, 10S", "Lea: JS, 5S, 4D, AC, JC, QC, 4C", "Jack: 3H, 7D, JS, JD, JC", "Jean: KD, 5S, 10S, 4H, 9H, AS", "Jack: QS, QD, KD, 5S, 10C", "Jean: AS, 8D, 2C, 4H, 9H"])