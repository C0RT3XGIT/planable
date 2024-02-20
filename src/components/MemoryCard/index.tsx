import React from 'react';
import { CardImage } from './styles';
import CardBack from '../../assets/images/back-card.png';

interface MemoryCardProps {
  isFlipped: boolean;
  src: string;
  disabled?: boolean;
}

const MemoryCard = ({ isFlipped, src, disabled = false }: MemoryCardProps) => {
  return <CardImage src={isFlipped ? src : CardBack} $disabled={disabled} />;
};

export default React.memo(MemoryCard);
