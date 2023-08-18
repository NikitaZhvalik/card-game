import { cardsStart, cardsPlay } from "../helpers/const.js"

export default function renderGame() {
    function renderCards (card) {
    const htmlCards = `
        <img src="${card.img}" alt="card">
    `

    document.querySelector('.next-page__cards').insertAdjacentHTML('afterbegin', htmlCards)
    }

    function renderContainer() {
        const html = `
                <div class="next-page">
                    <div class="next-page__header">
                        <div class="next-page__tamer">
                            <p class="next-page__title">min</p>
                            <h2 class="next-page__time">00.00</h2>
                        </div>
                        <button class="btn next-page__btn">Начать заново</button>
                    </div>
                    <div class="next-page__cards">
                    </div>
                </div>
    `;
    
    document.querySelector('#app').innerHTML = html;
    }

    const level = JSON.parse(localStorage.getItem('level'))
    let cards = cardsStart;

    setTimeout (() => {
        cards = cardsPlay

        if (level === 'easy') {
            console.log('easy')
        }
    
        if (level === 'medium') {
            console.log('medium')
        }
    
        if (level === 'hard') {
            console.log('hard')
        }

        renderPage()
    }, 500)

    function renderPage() {
        renderContainer()
        cards.forEach((card) => {
        renderCards(card)
        })
    }

    renderPage();
}

