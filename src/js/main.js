"use strict";

// DOM elements
const btnNew = document.querySelector(".js-new-button"),
 btnAsk = document.querySelector(".js-ask-button"),
 btnStop = document.querySelector(".js-stop-button");

// Variable declarations
let deck = [];
let shuffledDeck = [];

// Creating deck cards. C: Clubs, D: Diamonds, H: Hearts, S: Spades
const cardTypes = ["C", "D", "H", "S"],
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

  shuffledDeck = shuffleDeck(deck);
  console.log("Mazo barajado", shuffledDeck);
  return shuffledDeck;
};

createDeck();

const askCard = () => {
  // return deck.length === 0 ? alert("There are no more cards on the deck :(") : shuffledDeck.pop
  if (shuffledDeck.length === 0) {
    alert("There are no more cards on the deck :(");
  }
  const card = shuffledDeck.pop();
  console.log({ card });
  return card;
};

// askCard();

const calculateCardValue = (card) => {
  const cardValue = card.substring(0, card.length - 1);
  console.log({ cardValue });

  let points = 0;
  if (isNaN(cardValue)) {
    points = cardValue === "A" ? 11 : 10;
    console.log("No es un numero");
  } else {
    points = parseInt(cardValue);
  }
  console.log({ points });
  return points;
};

// calculateCardValue("3D");

const playersTurn = () => {
  console.log("Event listened");
  const card = askCard();
};


// Events
btnAsk.addEventListener("click", playersTurn);