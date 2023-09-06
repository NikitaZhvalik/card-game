const {it, expect} = require("@jest/globals");

// const {shuffleCards} = require('./shuffleCards');

import shuffleCards from './shuffleCards';

it('shuffledCards is an array', () => {
  const cards = shuffleCards(5, ['2', '3', '4', '5', '6'], ['hearts', 'diamonds', 'clubs', 'spades'], () => {});
  expect(Array.isArray(cards)).toBe(true);
});

// it('shuffledCards length is equal to the number of cards requested', () => {
//   const cards = shuffleCards(10, ['2', '3', '4', '5', '6'], ['hearts', 'diamonds', 'clubs', 'spades'], () => {});
//   expect(cards.length).toBe(10);
// });

// it('duplicatedCards length is twice the number of cards requested', () => {
//   const cards = shuffleCards(5, ['2', '3', '4', '5', '6'], ['hearts', 'diamonds', 'clubs', 'spades'], () => {});
//   expect(cards.length).toBe(10);
// });

// it('shuffledCards contains unique cards only', () => {
//   const cards = shuffleCards(5, ['2', '3', '4', '5', '6'], ['hearts', 'diamonds', 'clubs', 'spades'], () => {});
//   const uniqueCards = new Set(cards.map(card => `${card.cardsGrade}-${card.cardsSuit}`));
//   expect(uniqueCards.size).toBe(cards.length);
// });
