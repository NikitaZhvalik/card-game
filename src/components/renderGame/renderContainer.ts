import renderStartPage from "../../js/renderStartPage";

export default function renderContainer() {
    const app = document.querySelector('#app')
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

    document.querySelector('.next-page__btn')?.addEventListener('click', () => {
        renderStartPage()
    })
}