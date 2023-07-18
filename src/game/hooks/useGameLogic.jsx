import { useEffect, useState } from "react";
import { cardInfo } from "../../assets/cardInfo";
import { modalAlert } from "../helpers/modalAlert";
import { useNavigate } from "react-router-dom";
export const useGameLogic = () => {
  //flipping a card should show any of the 4 pairs, which should contain: a star, a moon, a sun or a comet, vertically and horizontally aligned
  const [cards, setCards] = useState([]);
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  const [score, setScore] = useState(1);

  //user can click on any card and a flip animation should occur, disabling the rest of the cards
  const [animating, setAnimating] = useState(false);

  const navigate = useNavigate();

  //the cards should be in random order
  const shuffleCards = () => {
    const shuffledCards = [...cardInfo, ...cardInfo]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        flipped: false,
        id: Math.random(),
      }));
    setCards(shuffledCards);
  };

  //updates the state of the card that was clicked
  const handleCardPicked = (card) => {
    cardOne ? setCardTwo(card) : setCardOne(card);
  };

  //if the user clicks on a card and then clicks on another card, the game should check if the cards match
  const checkPairs = () => {
    if (cardOne && cardTwo) {
      if (cardOne.image === cardTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === cardOne.image) {
              return {
                ...card,
                matched: true,
              };
            } else {
              return card;
            }
          });
        });
        setScore((score) => score + 1);
        if (score === 4) {
          navigate("/summary", { state: { win: true } });
        } else {
          modalAlert("nice!", "it’s a match", "success");
        }
        resetPick();
      } else {
        modalAlert("sorry,", "but this is not a match", "error");
        setTimeout(() => {
          resetPick();
        }, 200);
      }
    }
    setTimeout(() => {
      setAnimating(true);
    }, 200);
    setAnimating(false);
  };

  //if the cards match, they should stay flipped, otherwise they should flip back and updates the state of the cards
  const resetPick = () => {
    setCardOne();
    setCardTwo();
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    checkPairs();
  }, [cardOne, cardTwo]);

  return {
    cards,
    setCards,
    handleCardPicked,
    cardOne,
    cardTwo,
    animating,
    score,
  };
};
