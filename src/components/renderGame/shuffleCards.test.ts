const {it, expect, describe} = require("@jest/globals");

import shuffleCards from './shuffleCards';

describe('shuffleCards', () => {
  it('should shuffle and select the correct number of cards', () => {
    const cardsGrade = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardsSuit = ['hearts', 'diamonds', 'clubs', 'spades'];
    const cards = 5;

    const renderPage = jest.fn();

    shuffleCards(cards, cardsGrade, cardsSuit, renderPage);

    expect(renderPage).toHaveBeenCalledWith(expect.any(Array));
    expect(renderPage.mock.calls[0][0].length).toEqual(cards * 2);
  });

  it('should shuffle the cards randomly', () => {
    const cardsGrade = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardsSuit = ['hearts', 'diamonds', 'clubs', 'spades'];
    const cards = 5;

    const renderPage = jest.fn();

    shuffleCards(cards, cardsGrade, cardsSuit, renderPage);

    const firstCard = renderPage.mock.calls[0][0][0];
    const secondCard = renderPage.mock.calls[0][0][1];

    expect(firstCard).not.toEqual(secondCard);
  });
});

