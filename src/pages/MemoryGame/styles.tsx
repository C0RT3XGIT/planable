import styled from 'styled-components';
import { Flex, FlexColumn } from '../../ui/Flex';

export const MemoryGrid = styled(Flex)`
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
`;

export const CardWrapper = styled(Flex)`
  cursor: pointer;
  margin: auto;
`;

export const Header = styled(FlexColumn)`
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 20px;

  & h1,
  h2 {
    color: #000000;
  }
`;
