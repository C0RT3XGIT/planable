import React from 'react';
import { CardContainer, CardImage } from './styles';
import CardBack from '../../assets/images/back-card.png';

interface MemoryCardProps {
  isFlipped: boolean;
  src: string;
  disabled?: boolean;
}

const MemoryCard = ({ isFlipped, src, disabled = false }: MemoryCardProps) => {
  return (
    <CardContainer>
      <CardImage src={isFlipped ? src : CardBack} $disabled={disabled} />
    </CardContainer>
  );
};

export default MemoryCard;
