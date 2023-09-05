import renderStartPage from "../../js/renderStartPage"

export default function renderResultGame(resultGame :string, resultIcon :string, second :number, minute :number) {
    const app = document.querySelector('#app')

    const htmlResultGame = `
        <div class="wrapper renderResult-page__wrapper">
            <div class="renderResult-page next-page__result">
                <img class="renderResult__img" src=${resultIcon} alt="">
                <h1 class="renderResult__title">${resultGame}</h1>
                <p class="renderResult__text">Затраченное время:</p>
                <div class="renderResult__time">
                    <p class="renderResult__minute">0${minute}.</p>
                    <p class="renderResult__second">${second}</p>
                </div>

                <button class="btn btn__renderResult-start" type="submit">
                    Играть снова
                </button>
            </div>
        </div>
    `
    if (app) app.insertAdjacentHTML('beforeend', htmlResultGame)

    const timerSecond = document.querySelector('.renderResult__second')

    if (second <= 9) {
        if (timerSecond) timerSecond.textContent = "0" + second
    } else {
        second
    }

    document.querySelector('.renderResult-page')?.classList.remove('none')
    document.querySelector('.next-page')?.classList.add('blur')
    document.querySelector('.btn__renderResult-start')?.addEventListener('click', () => {
        renderStartPage()
    })
}

export {renderResultGame}