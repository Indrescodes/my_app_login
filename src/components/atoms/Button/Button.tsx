import React from 'react';
import { StyledButton } from './styles';

interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, children, className }) => {
  return <StyledButton className={className} onClick={onClick}>{children}</StyledButton>;
};

export default Button;
