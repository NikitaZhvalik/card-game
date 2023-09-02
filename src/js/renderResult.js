import renderStartPage from "./renderStartPage.js"

export default function renderResult() {
    const app = document.querySelector('#app')
    const html = `
                <div class="wrapper">
                    <div class="renderResult-page">
                        <img class="renderResult__img" src="./../../static/img/win-icon.svg" alt="">
                        <h1 class="renderResult__title">Вы выиграли!</h1>
                        <p class="renderResult__text">Затраченное время:</p>
                        <p class="renderResult__timer">01.20</p>
                        <button class="btn renderResult-start" type="submit">
                            Играть снова
                        </button>
                    </div>
                </div>
    `
    app.innerHTML = html

    document.querySelector('.renderResult-start').addEventListener('click', () => renderStartPage())
}