import styled from 'styled-components';

export const AppWrapper = styled.div`
  background: #574a72;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const MemoryGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
`;
export const CardWrapper = styled.div`
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
