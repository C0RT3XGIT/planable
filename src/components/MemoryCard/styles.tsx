import styled from 'styled-components';

export const CardImage = styled.img<{ $disabled: boolean; $rotate: boolean }>`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.34);
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transform: ${({ $rotate }) =>
    $rotate ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: all 0.3s ease-in-out;
`;
