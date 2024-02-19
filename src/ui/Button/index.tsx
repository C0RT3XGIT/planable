import React from 'react';
import styled from 'styled-components';

export const BaseButton = styled.button`
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};
