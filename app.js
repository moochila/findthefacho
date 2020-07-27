document.addEventListener('DOMContentLoaded', ()=> {

    const cardArray = [
        {
            name: 'bolsonaro',
            img: 'images/bolsonaro.png'    
        },
        {
            name: 'bolsonaro',
            img: 'images/bolsonaro.png'
        },
        {
            name: 'boris',
            img: 'images/boris.png'    
        },
        {
            name: 'boris',
            img: 'images/boris.png'
        },
        {
            name: 'erdogan',
            img: 'images/erdogan.png'    
        },
        {
            name: 'erdogan',
            img: 'images/erdogan.png'
        },
        {
            name: 'lepen',
            img: 'images/lepen.png'
        },
        {
            name: 'lepen',
            img: 'images/lepen.png'
        },
        {
            name:'orban',
            img: 'images/orban.png'
        },
        {
            name:'orban',
            img: 'images/orban.png'

        },
        {
            name: 'salvini',
            img: 'images/salvini.png'
        },  
        {
            name: 'salvini',
            img: 'images/salvini.png'
        },  
        {
            name: 'trump',
            img: 'images/trump.png'
        },   
        {
            name: 'trump',
            img: 'images/trump.png'
        },   
        {
            name: 'ventura',
            img: 'images/ventura.png'
        },  
        {
            name: 'ventura',
            img: 'images/ventura.png'
        }  
    
    ]

    cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const message = document.querySelector('#message')
  
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      message.textContent = 'Looks like you clicked the same facho!'
      let soundFail = new Audio('sounds/fail.mp3');
      soundFail.play(); 

    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      message.textContent = "It's a match!"
      let soundMatch = new Audio('sounds/match.mp3');
      soundMatch.play(); 
      cards[optionOneId].setAttribute('src', 'images/bg.png')
      cards[optionTwoId].setAttribute('src', 'images/bg.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      message.textContent = 'Oops, try again'
      let soundFail = new Audio('sounds/fail.mp3');
      soundFail.play(); 
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = "Score: "+ cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'You have found all the fachos!'
      let soundSuccess = new Audio('sounds/success.mp3');
      soundSuccess.play(); 
      message.textContent = 'Congratulations!'

    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})