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


module.exports = makeCard;