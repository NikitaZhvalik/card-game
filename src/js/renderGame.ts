import { cardsGrade, cardsSuit } from "../helpers/const.js"
// import { startTimer, stopTimer, goTimer } from "../helpers/timer";

export default function renderGame() {
    type Cards = {
        cardsGrade: string;
        cardsSuit: string;
    }

    function renderCards (card :Cards) {
        const htmlCards = `
            <div class="play-card" data-cardsSuit="${card.cardsSuit}" data-cardsGrade="${card.cardsGrade}">
                <p class="play-card__text play-card__text_head" data-cardsSuit="${card.cardsSuit}" data-cardsGrade="${card.cardsGrade}">${card.cardsGrade}</p>
                <img class="play-card__back none" src="./../../static/img/card-back.svg" alt="" data-cardsSuit="${card.cardsSuit}" data-cardsGrade="${card.cardsGrade}">
                <img class="play-card__img play-card__img_head" src="./static/img/${card.cardsSuit}.svg" alt="" data-cardsSuit="${card.cardsSuit}" data-cardsGrade="${card.cardsGrade}">
                <img class="play-card__img play-card__img_middle" src="./static/img/${card.cardsSuit}.svg" alt="" data-cardsSuit="${card.cardsSuit}" data-cardsGrade="${card.cardsGrade}">
                <img class="play-card__img play-card__img_footer" src="./static/img/${card.cardsSuit}.svg" alt="" data-cardsSuit="${card.cardsSuit}" data-cardsGrade="${card.cardsGrade}">
                <p class="play-card__text play-card__text_footer" data-cardsSuit="${card.cardsSuit}" data-cardsGrade="${card.cardsGrade}">${card.cardsGrade}</p>
            </div>
        `
        document.querySelector('.next-page__cards')?.insertAdjacentHTML('afterbegin', htmlCards)
    }

    const app = document.querySelector('#app')
    function renderContainer() {
        const html = `
                <div class="next-page">
                    <div class="next-page__header">
                        <div class="next-page__tamer">
                            <p class="next-page__title">min</p>
                            <div class="next-page__time">
                                <p class="next-page__minute">00.</p>
                                <p class="next-page__second">00</p>
                            </div>
                        </div>
                        <button class="btn next-page__btn">Начать заново</button>
                    </div>
                    <div class="next-page__cards">
                    </div>
                </div>
        `;
    
        if (app) app.innerHTML = html;
    }












    const level = JSON.parse(localStorage.getItem('level')!)   

    function shuffle(cards :number) {
        const shuffleArray = (array :Cards[]) => {
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

    const findCards = document.querySelectorAll('.play-card__back')
    for (const card of findCards) {
        card.addEventListener('click', () => {
            card.classList.add('none')
        })
    }

    const cards = Array.from(document.querySelectorAll('.play-card'));

    cards.forEach((card) => card.addEventListener('click', () => {
        card.classList.add('open')

        let openCards = cards.filter((card) => card.classList.contains('open'))
        openCards.forEach((card) => card.classList.add('win-card'))
        let winCards = cards.filter((card) => card.classList.contains('win-card'))
        if (winCards.length === cards.length) {
            setTimeout(() => alert('Вы победили!'), 250)
            stopTimer()
        }

        if (openCards.length === 2) {
            if (openCards[0].getAttribute('data-cardsGrade') === openCards[1].getAttribute('data-cardsGrade') && openCards[0].getAttribute('data-cardsSuit') === openCards[1].getAttribute('data-cardsSuit')) {
                openCards.forEach((card) => card.classList.remove('open'));
                return
            }
            if (openCards[0].getAttribute('data-cardsGrade') !== openCards[1].getAttribute('data-cardsGrade') || openCards[0].getAttribute('data-cardsSuit') !== openCards[1].getAttribute('data-cardsSuit')) {
                setTimeout(() => alert('Вы проиграли!'), 250)
                openCards.forEach((card) => card.classList.remove('open'));
                stopTimer()
            }
            openCards = [];
        }
    }));

    setTimeout (() => {
        const hiddenCards = document.querySelectorAll('.play-card__back')
        hiddenCards.forEach((card) => {
            card.classList.remove('none')
        })
        startTimer()
    }, 1500) //todo поменяй таймер на 5000

    function renderPage(selectedCards :Cards[]) {
        renderContainer()
        selectedCards.forEach((card :Cards) => {
            renderCards(card)
        })
    }







    // Поля таймера
    const timerSecond = document.querySelector('.next-page__second')
    const timerMinute = document.querySelector('.next-page__minute')
    let second :number = 0
    let minute :number = 0
    //TODO что здесь за тип данных? 
    let interval :any

    function startTimer() {
        goTimer()
        clearInterval(interval)
        interval = setInterval(goTimer, 1000)
    }

    function stopTimer() {
        clearInterval(interval)
    }

    function goTimer() {
        second++
        if (second <= 9) {
            if (timerSecond) timerSecond.textContent = "0" + second
        }
        if (second > 9) {
            if (timerSecond) timerSecond.textContent = String(second)
        }
        if (second > 59) {
            minute++
            if (minute < 9) {
                if (timerMinute) timerMinute.textContent = "0" + minute + "."
                second = 0
            }
            if (minute === 3) {
                alert('Вы проиграли!')
            }
        }
    }






}