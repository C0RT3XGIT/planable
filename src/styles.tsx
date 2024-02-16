import styled from 'styled-components';

export const AppWrapper = styled.div`
  background-image: url('https://planable.io/wp-content/uploads/2023/08/planable-social-ads-bg-tabs.png');
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

  & h1,
  h2 {
    color: #000000;
  }
`;

export const ActionButton = styled.button`
  padding: 16px 20px;
  font-size: 16px;
  font-weight: bold;
  background: #3bd388;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(59, 211, 136, 0.8);
  }
`;
