import { CardWrapper, Header, MemoryGrid } from './styles';
import MemoryCard from '../../components/MemoryCard';
import React, { useEffect, useState } from 'react';
import { Card, CatItem } from '../../types/cats';
import {
  attachUniqueId,
  duplicateArray,
  isEven,
  shuffleArray,
} from '../../utils/dataHelpers';
import { getCatImages } from '../../api/endpoints';
import { Button } from '../../ui/Button';
import { FlexColumn } from '../../ui/Flex';

const MemoryGame = () => {
  const [loadingImages, setLoadingImages] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [tries, setTries] = useState<number>(0);

  const prepareMemoryCards = (catImages: CatItem[]) => {
    const duplicatedCatImages = duplicateArray(catImages);
    const shuffledCatImages = shuffleArray(duplicatedCatImages);
    const cardsWithUniqueId = attachUniqueId(shuffledCatImages);

    return cardsWithUniqueId.map((card) => ({
      ...card,
      isMatched: false,
    }));
  };

  const initializeMemoryCards = async () => {
    try {
      setLoadingImages(true);
      const { data: catImages } = await getCatImages({ limit: 2 });
      const preparedMemoryCards = prepareMemoryCards(catImages);
      setCards(preparedMemoryCards);
    } catch (error) {
      console.error('Error while fetching cat images', error);
      alert('Error while fetching cat images');
    } finally {
      setLoadingImages(false);
    }
  };

  const verifyCardsMatch = (cards: Card[]) => cards[0]?.id === cards[1]?.id;

  const getFlippedCardsNextState = (card: Card) => {
    const isCardAlreadyFlipped = flippedCards.some(
      (item) => item.uniqueId === card.uniqueId,
    );

    if (isCardAlreadyFlipped) {
      return flippedCards;
    }

    return [...flippedCards, card];
  };

  const handleCardClick = (card: Card) => {
    setFlippedCards(getFlippedCardsNextState(card));
  };

  const shouldKeepFlipped = (card: Card) => {
    const isFlipped = flippedCards.some(
      (item) => item.uniqueId === card.uniqueId,
    );
    const isMatched = card.isMatched;
    return isFlipped || isMatched;
  };

  const markCardsAsMatched = (cardsToMark: Card[]) => {
    const updatedCards = cards.map((card) => {
      const isFlipped = cardsToMark.some(
        (flippedCard) => flippedCard.uniqueId === card.uniqueId,
      );
      return isFlipped ? { ...card, isMatched: true } : card;
    });

    setCards(updatedCards);
  };

  const resetFlippedCards = () => {
    setTimeout(() => {
      setFlippedCards([]);
    }, 1000);
  };

  const reinitializeGame = () => {
    initializeMemoryCards();
    setTries(0);
  };

  useEffect(() => {
    if (isEven(flippedCards.length) && flippedCards.length > 1) {
      if (verifyCardsMatch(flippedCards)) {
        markCardsAsMatched(flippedCards);
        resetFlippedCards();
      } else {
        setTries((prevTries) => prevTries + 1);
        resetFlippedCards();
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    let gameFinished: NodeJS.Timeout;
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      gameFinished = setTimeout(() => {
        alert('Congratulations! You won the game!');
        reinitializeGame();
      }, 1000);
    }

    return () => {
      clearTimeout(gameFinished);
    };
  }, [cards]);

  useEffect(() => {
    initializeMemoryCards();
  }, []);

  if (loadingImages) {
    return <div>Loading images...</div>;
  }

  return (
    <FlexColumn>
      <Header>
        <h1>Planable Memory Game</h1>
        <h2>Tries: {tries}</h2>

        <Button onClick={reinitializeGame}>New Game</Button>
      </Header>
      <MemoryGrid>
        {cards.map((card) => {
          const isFlipped = shouldKeepFlipped(card);
          const flippedCardsMatched = flippedCards.length === 2;
          const isClickable = !flippedCardsMatched && !isFlipped;
          return (
            <CardWrapper
              key={card.uniqueId}
              onClick={() => isClickable && handleCardClick(card)}
            >
              <MemoryCard
                src={card.url}
                isFlipped={isFlipped}
                disabled={flippedCardsMatched && !isFlipped}
              />
            </CardWrapper>
          );
        })}
      </MemoryGrid>
    </FlexColumn>
  );
};

export default MemoryGame;
