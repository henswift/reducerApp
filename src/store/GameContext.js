import { createContext } from "react";

export const GameContext = createContext(null)

function makeCards() {

    let suits = ['H','D','S','C'];
    let faces = ['King','Queen','Jack','Ace'];

    let cards = [];
    for (let face of faces) {
        for (let suit of suits) {
            let card = {
                face: face,
                suit: suit,
            }
            cards.push(card)
        }
    }
    return cards;
}

export const gameObject = {
    cards: makeCards(),
}