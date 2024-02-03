
const getCardInfo = index => {
    if (index === 0) return {
        "title": "Nike",
	    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "color": "#deaf01"
    }

    if (index === 1) return {
        "title": "Independent",
	    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "color": "#554a33"
    }

    if (index === 2) return {
        "title": "Michael Kors",
	    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color": "#01322f"
    }
}


const createCard = (card, { title, text, image, color }) => {
    card.style.backgroundImage = `url(${image})`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = cardInfo.title

    const p = card.querySelector('p')
    p.textContent = cardInfo.text
}

const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) 
    createCard(cards[i], getcardInfo(i))
