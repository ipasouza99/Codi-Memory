document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
	{
		name: 'ganhou',
		img: 'images/ganhou.png'
	},
	{
		name: 'ganhou',
		img: 'images/ganhou.png'
	},
	{
		name: 'direita',
		img: 'images/direita.png'
	},
	{
		name: 'direita',
		img: 'images/direita.png'
	},
	{
		name: 'tras',
		img: 'images/tras.png'
	},
	{
		name: 'tras',
		img: 'images/tras.png'
	},
	{
		name: 'correndo',
		img: 'images/correndo.png'
	},
	{
		name: 'correndo',
		img: 'images/correndo.png'
	},
	{
		name: 'pulo',
		img: 'images/pulo.png'
	},
	{
		name: 'pulo',
		img: 'images/pulo.png'
	},
	{
		name: 'esquerda',
		img: 'images/esquerda.png'
	},
	{
		name: 'esquerda',
		img: 'images/esquerda.png'
	}


	]

   cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')

	const resultDisplay = document.querySelector('#result')
	var cardsChosen = [];
	var cardsChosenId = [];
	var pares = [];

	function createBoard(){
		for(let i=0; i<cardArray.length;i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'images/card.png')
			card.setAttribute('data-id',i)
			card.addEventListener('click',flipCard)
			grid.appendChild(card)
		}
	}

    function checkforMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

		if(optionOneId == optionTwoId) {
			cards[optionOneId].setAttribute('src','images/card.png')
			cards[optionTwoId].setAttribute('src','images/card.png')
			alert("Você clicou na mesma imagem")
		}

		else if(cardsChosen[0] == cardsChosen[1]){
			cards[optionOneId].setAttribute('src', 'images/white.png')
			cards[optionTwoId].setAttribute('src', 'images/white.png')
			cards[optionOneId].removeEventListener('click',flipCard)
			cards[optionTwoId].removeEventListener('click',flipCard)
			pares.push(cardsChosen)
			alert("Você conseguiu um par!")
		}

		else {
			cards[optionOneId].setAttribute('src','images/card.png')
			cards[optionTwoId].setAttribute('src','images/card.png')
			alert('Ops! Jogue novamente :)')
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = pares.length

		if( pares.length == cardArray.length/2){
			resultDisplay.textContent = 'Parabéns! Você encontrou todos os pares!'
		}

	}

	function flipCard() {
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if(cardsChosen.length == 2){
			setTimeout(checkforMatch, 500)
		}
	}

	createBoard()


})

