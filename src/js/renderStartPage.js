import '../../index.css';
import renderGame from './renderGame.js';

let level = loadLevel();

function saveLevel(newLevel) {
    localStorage.setItem('level', JSON.stringify(newLevel))
}

function loadLevel() {
    return localStorage.getItem('level') ? JSON.parse(localStorage.getItem('level')) : 'easy';
}

function renderStartPage() {
    const app = document.querySelector('#app')
    const html = `
                <div class="wrapper">
                    <div class="main__start-page">
                        <h1 class="main__title">Выбери сложность</h1>
                        <div class="main__btns">
                            <label class="custom-radio custom-radio_1">
                                <input type="radio" ${loadLevel() === 'easy' ? 'checked' : null} name="checkbox" value="easy">
                                <span></span>
                            </label>
                            <label class="custom-radio custom-radio_2">
                                <input type="radio" ${loadLevel() === 'medium' ? 'checked' : null} name="checkbox" value="medium">
                                <span></span>
                            </label>
                            <label class="custom-radio custom-radio_3">
                                <input type="radio" ${loadLevel() === 'hard' ? 'checked' : null} name="checkbox" value="hard">
                                <span></span>
                            </label>
                        </div>
                        <button class="btn main__btn-start" type="submit">
                            Старт
                        </button>
                    </div>
                </div>
    `
    app.innerHTML = html

    document.querySelector('.custom-radio_1').addEventListener('change', () => saveLevel('easy'))
    document.querySelector('.custom-radio_2').addEventListener('change', () => saveLevel('medium'))
    document.querySelector('.custom-radio_3').addEventListener('change', () => saveLevel('hard'))
    document.querySelector('.main__btn-start').addEventListener('click', () => renderGame())
}

renderStartPage()

