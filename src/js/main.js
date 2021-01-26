// Module pattern to avoid game cheating
const myModule = (() => {

  "use strict";
  
  // DOM elements
  const btnNew = document.querySelector(".js-new-button"),
    btnAsk = document.querySelector(".js-ask-button"),
    btnStop = document.querySelector(".js-stop-button");

  const htmlPoints = document.querySelectorAll(".js-players-points");
  const divPlayersCards = document.querySelectorAll(".cards-container");

  // Variable declarations
  let deck = [];
  let shuffledDeck = [];

  // Creating deck cards. C: Clubs, D: Diamonds, H: Hearts, S: Spades
  const cardTypes = ["C", "D", "H", "S"],
    specialCards = ["J", "Q", "K", "A"];

  let playersPoints = [];

  const initiateGame = ( numberOfPlayers = 2) => {
    deck = createDeck();
    playersPoints = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      playersPoints.push(0);
    }
  };

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
    return shuffledDeck;
  };

  const renderCards = (card, turn) => {
    const cardImage = document.createElement("img");
    cardImage.src = `./assets/images/cards/${card}.png`;
    cardImage.classList.add("card");
    divPlayersCards[turn].append(cardImage);
  };

  const askCard = () => {
    if (shuffledDeck.length === 0) {
      alert("There are no more cards on the deck :(");
    }
    const card = shuffledDeck.pop();
    return card;
  };

  const calculateCardValue = (card) => {
    const cardValue = card.substring(0, card.length - 1);

    let points = 0;
    if (isNaN(cardValue)) {
      points = cardValue === "A" ? 11 : 10;
    } else {
      points = parseInt(cardValue);
    }
    return points;
  };

  // First turn = player (index 0); last turn = computer (index 1)
  const acumulatePoints = ( card, turn ) => {
    playersPoints[turn] = playersPoints[turn] + calculateCardValue(card);
    htmlPoints[turn].innerText = `${playersPoints[turn]} points`;
    return playersPoints[turn];
  };

  const playersTurn = () => {
    const card = askCard();
    const playerPoints = acumulatePoints( card, 0);
    renderCards(card, 0);

    if (playerPoints > 21) {
      console.warn("Im so sorry, you lost. But keep trying!");
      btnAsk.disabled = true;
      btnStop.disabled = true;
      computersTurn(playerPoints);
    } else if (playerPoints === 21) {
      console.warn("Wow 21 points! You win this time :)");
      disableButtons();
      computersTurn(playerPoints);
    }
  };

  const handleFinishTurn = () => {
    disableButtons();
    computersTurn(playersPoints[0]);
  };

  const disableButtons = () => {
    btnAsk.disabled = true;
    btnStop.disabled = true;
    btnAsk.classList.add("btn-disabled");
    btnStop.classList.add("btn-disabled");
  };

  const enableButtons = () => {
    btnAsk.disabled = false;
    btnStop.disabled = false;
    btnAsk.classList.remove("btn-disabled");
    btnStop.classList.remove("btn-disabled");
  };

  const computersTurn = (minPoints) => {
    let computerPoints = 0;

    do {
      const card = askCard();
      computerPoints = acumulatePoints( card, playersPoints.length - 1);
      renderCards(card, playersPoints.length - 1);

      if (minPoints > 21) {
        break;
      }
    } while (computerPoints < minPoints && minPoints <= 21);

    defineWinner();
  };

  const defineWinner = () => {

    const [minPoints, computerPoints] = playersPoints;

    setTimeout(() => {
      if (computerPoints === minPoints) {
        alert("No one wins :(");
      } else if (minPoints > 21) {
        alert("Computer wins");
      } else if (computerPoints > 21) {
        alert("You win! :D");
      } else {
        alert("Computer wins");
      }
    }, 100);

    disableButtons();
  };

  const startNewGame = () => {
    initiateGame();

    htmlPoints.forEach(player => player.innerText = 0);
    divPlayersCards.forEach(player => player.innerHTML = "");

    enableButtons();
  };

  // Events
  btnAsk.addEventListener("click", playersTurn);
  btnStop.addEventListener("click", handleFinishTurn);
  btnNew.addEventListener("click", startNewGame);

  // Accessible code
  return {
    newGame: initiateGame
  };

})();
