import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCatImages } from './api/endpoints';
import { CatItem } from './types/cats';
import {
  duplicateArray,
  generateUniqueId,
  shuffleArray,
} from './utils/arrayUtils';
import MemoryCard from './components/MemoryCard';

const AppWrapper = styled.div`
  background: #574a72;
  height: 100%;
`;

const MemoryGrid = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 40px;
`;

function App() {
  const [loadingImages, setLoadingImages] = useState<boolean>(false);
  const [cards, setCards] = useState<CatItem[]>([]);

  const prepareMemoryCards = (catImages: CatItem[]) => {
    const duplicatedCatImages = duplicateArray(catImages);
    const shuffledCatImages = shuffleArray(duplicatedCatImages);
    return generateUniqueId(shuffledCatImages);
  };

  const initializeMemoryCards = async () => {
    try {
      setLoadingImages(true);
      const { data: catImages } = await getCatImages({ limit: 2 });
      const preparedMemoryCards = prepareMemoryCards(catImages);
      setCards(preparedMemoryCards);
    } catch (error) {
      console.error('Error while fetching cat images', error);
    } finally {
      setLoadingImages(false);
    }
  };

  useEffect(() => {
    initializeMemoryCards();
  }, []);

  if (loadingImages) {
    return <div>Loading images...</div>;
  }

  return (
    <AppWrapper>
      <MemoryGrid>
        {cards.map((card) => (
          <MemoryCard key={card.id} src={card.url} alt={card.id} />
        ))}
      </MemoryGrid>
    </AppWrapper>
  );
}

export default App;
