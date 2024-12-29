import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  // Fetch cards data from an API
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then((response) => {
      const fetchedCards = response.data.results.map((pokemon, index) => ({
        id: index,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      }));
      setCards(fetchedCards);
    });
  }, []);

  // Handle card click
  const handleCardClick = (cardId) => {
    if (clickedCards.includes(cardId)) {
      // Reset score if card was already clicked
      setScore(0);
      setClickedCards([]);
    } else {
      // Increment score and add to clickedCards
      setScore(score + 1);
      setClickedCards([...clickedCards, cardId]);

      // Update best score
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }

    // Shuffle cards
    shuffleCards();
  };

  // Shuffle cards
  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </header>
      <div className="card-grid">
        {cards.concat(cards).map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="card"
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
