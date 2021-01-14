"use strict";

let deck = [];

// Creating deck cards
const cardTypes = ["C", "D", "H", "S"], // C: Clubs, D: Diamonds, H: Hearts, S: Spades
  specialCards = ["J", "Q", "K", "A"];

/* Function to shuffle the deck: this loop iterates over an array from back to front bypassing index 0. Each iteration generates a random number (index variable) ranging between 0 and the counter variable (last item), and then swaps both values to suffle them.*/
const shuffleDeck = (array) => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

const createDeck = () => {
  deck = [];
  for (let cardType of cardTypes) {
    for (let i = 2; i <= 10; i++) {
      deck.push(i + cardType);
    }
    for (let specialCard of specialCards) {
      deck.push(specialCard + cardType);
    }
  }
  shuffleDeck(deck);
  return deck; 
};

createDeck();
console.log(deck);
