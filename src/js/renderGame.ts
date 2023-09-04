import { cardsGrade, cardsSuit } from "../helpers/const.js"
import renderCards from "../components/renderGame/renderCards";
import renderContainer from "../components/renderGame/renderContainer";
import shuffleCards from "../components/renderGame/shuffleCards";
// import { startTimer, stopTimer, goTimer } from "../helpers/timer";

export default function renderGame() {
    type Cards = {
        cardsGrade: string;
        cardsSuit: string;
    }

    const level = JSON.parse(localStorage.getItem('level')!)   

    switch (level) {
        case 'easy':
            shuffleCards(3, cardsGrade, cardsSuit, renderPage)
        break;
    
        case 'medium':
            shuffleCards(6, cardsGrade, cardsSuit, renderPage)
        break;

        case 'hard':
            shuffleCards(9, cardsGrade, cardsSuit, renderPage)
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
        const winCards = cards.filter((card) => card.classList.contains('win-card'))
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
    }, 1500) 
    //todo поменяй таймер на 5000

    function renderPage(selectedCards :Cards[]) {
        renderContainer()
        selectedCards.forEach((card) => {
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