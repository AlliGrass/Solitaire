
const suits = ['H', 'D', 'C', 'S']; // Hearts, Diamonds, Clubs, Spades
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // 1 = Ace, 11 = Jack, 12 = Queen, 13 = King

const deck = [];
let cardStacks = [];




suits.forEach(suit => {
  values.forEach(value => {
    switch(value) {
        case 11:
            deck.push(suit + "J");
            break;
        case 12:
            deck.push(suit + "Q");
            break;
        case 13:
            deck.push(suit + "K");
            break;
        default:
            deck.push(suit + value);
            break;
    }
  });
});

function cardRandomiserSort() {
    let sortDeck = deck; // Create a copy of the original deck
    let newDeck = []; // Initialize new deck to store shuffled cards

    while(sortDeck.length !== 0) {
        let randomIndex = Math.floor(Math.random() * sortDeck.length); // Generate random index
        newDeck.push(sortDeck[randomIndex]); // Add random card to new deck
        sortDeck.splice(randomIndex, 1); // Remove card from sortDeck
    }

    return newDeck; // Return the shuffled deck if needed
}

function initialiseCards () {
    let workingDeck = cardRandomiserSort();
    for (i = 1; i <= 7; i++) {
        currentStack = [];
        for (j = 0; j < i; j++) {
            currentStack.push(workingDeck[0]);
            workingDeck.splice(0, 1);
        }
        cardStacks.push(currentStack);
    }
    cardStacks.unshift(workingDeck);
    console.log(cardStacks);
}

function createCard(card) {
    cardSuitValue = card[0];
    cardNumberValue = card[1];

    switch(cardSuitValue) {
        case "H":
            cardSuitValue = "&heartsuit;";
            cardSuitColor = "card-suit-red";
            break;
        case "D":
            cardSuitValue = "&diamondsuit;"
            cardSuitColor = "card-suit-red";
            break;
        case "S":
            cardSuitValue = "&spadesuit;"
            cardSuitColor = "card-suit-black";
            break;
        case "C":
            cardSuitValue = "&clubsuit;"
            cardSuitColor = "card-suit-black";
            break;
    }

    let topCardDiv = document.createElement("div");
    topCardDiv.classList.add("top-card");

    let bottomCardDiv = document.createElement("div");
    bottomCardDiv.classList.add("bottom-card");

    let topCardNumberP = document.createElement("p");
    topCardNumberP.innerText = cardNumberValue;

    let topCardSuitP = document.createElement("p");
    topCardSuitP.innerHTML = cardSuitValue;

    let bottomCardNumberP = document.createElement("p");
    bottomCardNumberP.innerText = cardNumberValue;

    let bottomCardSuitP = document.createElement("p");
    bottomCardSuitP.innerHTML = cardSuitValue;

    let cardImageP = document.createElement("p");
    cardImageP.classList.add("card-info");
    cardImageP.innerHTML = cardSuitValue;


    // add p id tags


    topCardDiv.appendChild(topCardSuitP);
    topCardDiv.appendChild(topCardNumberP);

    bottomCardDiv.appendChild(bottomCardNumberP);
    bottomCardDiv.appendChild(bottomCardSuitP);



    let newCard = document.createElement("li");
    
    newCard.appendChild(topCardDiv);
    newCard.appendChild(cardImageP);
    newCard.appendChild(bottomCardDiv);


    newCard.classList.add("shortened-card");
    newCard.classList.add("card-back");
    newCard.classList.add(cardSuitColor);

    return newCard;
}

function replaceLastCard(placedCardStack) {
    placedCardStack[placedCardStack.length-1].classList.remove("card-back");
    placedCardStack[placedCardStack.length-1].classList.remove("shortened-card");
    placedCardStack[placedCardStack.length-1].classList.add("card");
}

function makeRemainderCardVisible(remainderCardLi) {
    remainderCardLi[remainderCardLi.length-1].classList.add("top-card");
}


function placeCardsOnTable() {

    for (i = 1; i <= 7; i++) {
        let currentStack = cardStacks[i];
        let placedCardStack;
        let currentStackRow = document.getElementById(`stack-row-${i}`);

        currentStack.forEach(card => {
            currentStackRow.appendChild(createCard(card));
        });
        placedCardStack = currentStackRow.getElementsByTagName("li");

        replaceLastCard(placedCardStack);
    }

    // rest of the cards cardStacks[0];

    let currentStack = cardStacks[0];

    let remainderCardStack = document.getElementById("non-flipped-stack");
    console.log(currentStack)
    currentStack.forEach(card => {

        let newCard = createCard(card);

        newCard.classList.remove("shortened-card");
        newCard.classList.add("card");


        remainderCardStack.appendChild(newCard);
        //place card in nonflipped stack, make last card visible
    });

    remainderCardLi = remainderCardStack.getElementsByTagName("li");

    makeRemainderCardVisible(remainderCardLi);






}


initialiseCards();

placeCardsOnTable();







// Solitaire

/*
 
inital array of 52, refer to array when sorting cards (create working array for replayability)

sort using random num, remove card from array and update sort random to be the max length of working array

start by assign cards to working stacks that are immediately visible at bottom of screen, sort remainder (also random) within spare stack.

display back of card initially for all cards.

every row of working stacks is object (card value, visiblity boolean) // visibility boolean as class for array(?)

cycle through spare stack one by one, returning to start of deck when object (card value, visiblity boolean) ends



placeholder card(?) // CANNOT BE MOVED




troubleshooting: check that all arranged cards add up to 52 by checking lengths of arrays together


ascending cards check: check suit, then check value is ascending (reject or accept card into array) 
descending cards check: get first card, check if value and matching suit aligns (reject or accept card array merge)


functions :

- card visibility management
- confirm card can be placed
    - ascending final cards stacks (4 stack suits)
    - descending working cards stacks



Extra: 
- allow to remove card into working stacks again 
- allow autocomplete once all cards are revealed
    - function to check for all cards (within visibility management function)
        - if class, queryselectorall class and compare to amount in deck 52
    - display autocomplete button

- shorten card when not on top

*/





// Mastermind

/* 

randomise colours, assign them to numbers to be able to effectively random order + effective toggle

toggle through colours when press on button

submit button to enter code submission

evaluate input code. check for each pin in for loop (comparison array for multiples)

display comparison on right side of working space

if input code matches randomised initial code, reveal code at bottom of working space


functions: 
- toggle colours
- submit code
    - compare code to initial randomised code
        - display comparison result






*/