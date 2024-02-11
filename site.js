
const products = [{
    "title": "Nike",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    "color": "#deaf01"
}, {
    "title": "Independent",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
    "color": "#554a33"
}, {
    "title": "Michael Kors",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
    "color": "#01322f"
}, {
    "title": "HYPERX",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg",
    "color": "#7f4252"
}, {
    "title": "Jersey",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg",
    "color": "#FF0000"
}]


const displayProduct = (card, { title, text, image, color }) => {

    card.style.backgroundImage = `url(${image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = title

    const p = card.querySelector('p')
    p.textContent = text
}

let offset = 0
const cards = document.querySelectorAll('.card')

const updateCards = shift => {
    offset += shift || 0
    for (let i = 0; i < cards.length; i++) {
    let index = (i + offset) % products.length
    displayProduct(cards[i], products[index])
}
}

updateCards()

const previousButton = document.querySelector('button.previous')
const nextButton = document.querySelector('button.next')

previousButton.addEventListener('click', () => updateCards(-1))
nextButton.addEventListener('click', () => updateCards(1))

// destructuring

const { color, title } = products[0]
console.log(title, color)

const [ first ] = 'Hello there, how are you?' .split(' ')
console.log( first )

const printFirstWord = ([ first, second]) => {
    console.log((first))
}

printFirstWord('Hello there hi'.split(' '))

// inclues

const greeting = 'hey'

if ([ 'hi', 'hello', 'hey' ].includes(greeting)) 
{
console.log(greeting)
}

console.log([ 'hi', 'hello', 'hey'].slice(1))

// split
const someText = 'Hello there, how are you?'

const words = someText.toLowerCase().split(' ')
console.log(words)

// slice and at

const uppercase = text => `${text.at(0).toUpperCase()}${text.slice(1).toLowerCase()}`
console.log(uppercase('ryan'))