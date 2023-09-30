import {styled} from 'nativewind';
import React from 'react';
import {Button} from 'react-native';

interface ButtonProps {
  id?: string;
  title: string;
  color?: string;
  className?: string;
  onClick: () => void;
}

export const ButtonComponent = ({
  id,
  title,
  color,
  className,
  onClick,
}: ButtonProps) => {
  const StyledButton = styled(Button);

  return (
    <StyledButton
      title={title}
      color={color}
      className={className}
      //   accessibilityLabel="Learn more about this purple button"
      onPress={onClick}
    />
  );
};
