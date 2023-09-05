type Cards = {
    cardsGrade: string;
    cardsSuit: string;
}

export default function shuffleCards(cards :number, cardsGrade :string[], cardsSuit :string[], renderPage :(cards: {cardsGrade: string, cardsSuit: string}[]) => void) {
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