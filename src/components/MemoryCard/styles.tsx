import styled, { keyframes } from 'styled-components';

export const flipAnimation = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(180deg);
    }
`;

export const CardImage = styled.img<{ $disabled: boolean }>`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.34);
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: all 0.3s ease-in-out;
`;
