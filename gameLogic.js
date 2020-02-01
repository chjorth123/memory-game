//variable to keep track how many clicks have been made
let cardsDisplayed = 0;
//variable to keep track of what cards were flipped from face down to face up
let flippedCards = [];
//variable to keep track of what card data to determine match or not match
let cardData = [];
// check to see if cards match
let cardsMatch = false;
//track number of attempts
let attempts = 0;
//track the score
let score = 0;
//reset button event handler
const reset = document.querySelector('#reset');
//setup a event delegation
const eventHead = document.querySelector('#cardTable');
//set the highscore in local storage to 0
localStorage.setItem("highscore", "0");



eventHead.addEventListener('click', function(e){
    //card flipping from face down to face up logic
    if(e.target.id === 'one' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/200px-Playing_card_heart_2.svg.png")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'two' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/queen of diamonds.jpg")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'three' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/ace of spades.png")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'four' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/queen of diamonds.jpg")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'five' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/8 of clubs.jpg")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'six' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/jack of hearts.jpg")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'seven' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/200px-Playing_card_heart_2.svg.png")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'eight' && cardsDisplayed < 2){
        e.target.setAttribute("src", "cardImages/three of diamonds.jpg")
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'nine' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/six of spades.jpg")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'ten' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/jack of hearts.jpg")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'eleven' && cardsDisplayed < 2){
        e.target.setAttribute("src", "cardImages/8 of clubs.jpg")
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'twelve' && cardsDisplayed < 2){
        e.target.setAttribute("src", "cardImages/six of spades.jpg")
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'thirteen' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/ace of spades.png")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'fourteen' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/ace of hearts.jpg")
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'fifteen' && cardsDisplayed < 2){
        e.target.setAttribute("src", "cardImages/ace of hearts.jpg")
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    else if(e.target.id === 'sixteen' && cardsDisplayed < 2){
        cardsDisplayed++;
        flippedCards.push(e.target.id);
        cardData.push(e.target.getAttribute('data-card'));
        e.target.setAttribute("src", "cardImages/three of diamonds.jpg")
       if(cardsDisplayed === 2){
            checkForMatch(cardData);
       }
       
    }
    
})

//event handling for button reset
reset.addEventListener('click', function(e){
    saveHighScore();
    flipAllCards();
});

//function to flip cards back over after one second
function flipCardsOver(cardIds){
    let cardId1 = `#${cardIds[0]}`;
    let cardId2 = `#${cardIds[1]}`;
    const firstFlipped = document.querySelector(cardId1);
    const secondFlipped = document.querySelector(cardId2);
    firstFlipped.setAttribute("src", "cardImages/card back black.png");
    secondFlipped.setAttribute("src", "cardImages/card back black.png");
    
    //the following resets all the trackers to empty or 0
    resetTrackers();
}

//function to check if cards match
function checkForMatch(cardIds){
    attempts++;
    updateAttempts();
    if(cardIds[0] === cardIds[1]){
        cardsMatch = true;
        resetTrackers();
        score++;
        updateScore();
    }
    else{
        cardsMatch = false;
        setTimeout(function(){
            flipCardsOver(flippedCards);
        }, 1500)
    }
}
//function to reset all trackers
function resetTrackers(){
    cardsDisplayed = 0;
    flippedCards.pop();
    flippedCards.pop();
    cardData.pop();
    cardData.pop();

}
//function to flip all the cards to face down
function flipAllCards(){
    attempts = 0;
    updateAttempts();
    score = 0;
    updateScore();
    let cardList = document.querySelectorAll("img");
    
    for(let cards of cardList){
        cards.setAttribute("src", "cardImages/card back black.png");
    }
}

//function to change attempts
function updateAttempts(){
    let attemptId = document.querySelector('#attempts');
    attemptId.innerText = attempts;
}

//function to update score
function updateScore(){
    let scoreId = document.querySelector('#result');
    scoreId.innerText = score;
}

//function to save to local storage
function saveHighScore(){
    let potentialHighScore = score;
    let currentHighScore = localStorage.highscore;
    if(potentialHighScore > currentHighScore){
        
        localStorage.highScore = potentialHighScore;
        updateHighScore(potentialHighScore);
    }

}
//function to update high score
function updateHighScore(newScore){
    let highScoreHolder = document.querySelector("#hsScore");
    highScoreHolder.innerText = newScore;
}