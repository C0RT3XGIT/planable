import React, { useState } from 'react';
import CardBack from '../../assets/images/back-card.png';
import { CardContainer, CardImage } from './styles';

type MemoryCardProps = React.ImgHTMLAttributes<HTMLImageElement>;

const MemoryCard = ({ ...rest }: MemoryCardProps) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped((prevState) => !prevState);
  };
  return (
    <CardContainer onClick={handleCardClick}>
      {isFlipped ? <CardImage src={CardBack} /> : <CardImage {...rest} />}
    </CardContainer>
  );
};

export default MemoryCard;
