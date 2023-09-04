type Cards = {
    cardsGrade: string;
    cardsSuit: string;
}

export default function renderCards (card: Cards) {
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