function printDeckOfCards(cards) {

    if (!Array.isArray(cards)) return false;

    let stringCheck = cards.every(card => typeof card === 'string');
    if (!stringCheck) return false;


    // output cards array 
    let cardsArr = [];
    let invalid;

    // Loop through the cards 
    cards.forEach(card => {
        let face, suit;
        if (card.length == 3) {
            face = card.substring(0, 2);
            suit = card.substring(2);
        } else if (card.length == 2) {
            [face, suit] = card.split('')
        } else if (card.length > 3 || card.length < 2) {
            throw new Error('Invalid face or suit');
        }

        let cardObj;
        try {

            cardObj = makeCard(face, suit);
            cardsArr.push(cardObj.toString());

        } catch (err) {
            // get the invalid card
            invalid = card;
        }

    })


    if (invalid) {
        console.log('Invalid Card: ' + invalid);
        return;
    }

    console.log(cardsArr.join(' '));



    function makeCard(face, suit) {

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face)) {
            throw new Error('Error');
        }

        if (!validSuits.includes(suit)) {
            throw new Error('Error');
        }

        let card = {
            _face: face,
            _suit: suit,

            get face() {
                return this._face;
            },

            set face(f) {
                if (!validFaces.includes(f)) {
                    throw new Error('Error');
                } else {
                    this._face = f;
                }
            },

            get suit() {
                return this._suit;
            },

            set suit(s) {
                if (!validSuits.includes(s)) {
                    throw new Error('Error');
                } else {
                    this._suit = s;
                }
            },

            toString() {
                let suitSymbols = {
                    'S': '\u2660',
                    'H': '\u2665',
                    'D': '\u2666',
                    'C': '\u2663',
                }
                return card.face + suitSymbols[card.suit];
            }





        }

        return card;
    }
}

module.exports = printDeckOfCards;