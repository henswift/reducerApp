function CardShuffling(cards) {
    let shuffledCards = [...cards];
    let currentIndex = shuffledCards.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = shuffledCards[currentIndex];
      shuffledCards[currentIndex] = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = temporaryValue;
    }
    return shuffledCards;
  }
  

export default CardShuffling