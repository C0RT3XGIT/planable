import styled, { keyframes } from 'styled-components';

export const flipAnimation = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(180deg);
    }
`;

export const CardImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  position: relative;
  display: inline-block;
  animation: ${flipAnimation} 0.6s;
`;
