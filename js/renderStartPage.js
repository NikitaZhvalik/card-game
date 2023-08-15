import renderGame from './renderGame.js';

let level = loadLevel();

function saveLevel(newLevel){
    localStorage.setItem('level', JSON.stringify(newLevel))
}

function loadLevel(){
    return localStorage.getItem('level') ? JSON.parse(localStorage.getItem('level')) : 'eazy';
}

function renderStartPage() {
    const app = document.querySelector('#app')
    const html = `
        <div class="main__start-page">
            <h1 class="main__title">Выбери сложность</h1>
            <div class="main__btns">
                <button class="main__btn main__btn_eazy">
                    1
                </button>
                <button class="main__btn main__btn_medium">
                    2
                </button>
                <button class="main__btn main__btn_hard">
                    3
                </button>
            </div>
            <button class="main__btn-start">
                Старт
            </button>
        </div>
    `
    app.innerHTML = html

    document.querySelector('.main__btn_eazy').addEventListener('click', () => saveLevel('eazy'))
    document.querySelector('.main__btn_medium').addEventListener('click', () => saveLevel('medium'))
    document.querySelector('.main__btn_hard').addEventListener('click', () => saveLevel('hard'))

    document.querySelector('.main__btn-start').addEventListener('click', () => renderGame())
}

renderStartPage();