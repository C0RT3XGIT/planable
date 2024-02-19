import styled from 'styled-components';

interface CustomFlexProps {
  gap?: number;
  flexDirection?: 'row' | 'column';
}

export const Flex = styled.div<CustomFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  ${({ gap }) => (gap ? `gap: ${gap}px` : '')};
`;

export const FlexColumn = styled(Flex).attrs({ flexDirection: 'column' })``;
