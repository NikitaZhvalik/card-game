import { cardsGrade, cardsSuit } from "../helpers/const.js"

export default function renderGame() {
    function renderCards (card) {
        const htmlCards = `
            <div class="play-card">
                <p class="play-card__text play-card__text_head">${card.cardsGrade}</p>
                <img class="play-card__back none" src="./../../static/img/card-back.svg" alt="">
                <img class="play-card__img play-card__img_head" src="./static/img/${card.cardsSuit}.svg" alt="">
                <img class="play-card__img play-card__img_middle" src="./static/img/${card.cardsSuit}.svg" alt="">
                <img class="play-card__img play-card__img_footer" src="./static/img/${card.cardsSuit}.svg" alt="">
                <p class="play-card__text play-card__text_footer">${card.cardsGrade}</p>
            </div>
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

    function shuffle(cards) {
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const shuffledCards = shuffleArray(cardsGrade.flatMap(grade => cardsSuit.map(suit => ({ cardsGrade: grade, cardsSuit: suit }))))
        const selectedCards = shuffledCards.slice(0, cards)
        const duplicatedCards = shuffleArray([...selectedCards, ...selectedCards])
        
        renderPage(duplicatedCards)
    }

    switch (level) {
        case 'easy':
            shuffle(3)
        break;
    
        case 'medium':
            shuffle(6)
        break;

        case 'hard':
            shuffle(9)
        break;
    }

    setTimeout (() => {
        const hiddenCards = document.querySelectorAll('.play-card__back')
        hiddenCards.forEach((card) => {
            card.classList.remove('none')
        })
    }, 2000)

    function renderPage(selectedCards) {
        renderContainer()
        selectedCards.forEach((card) => {
        renderCards(card)
        })
    }
}

