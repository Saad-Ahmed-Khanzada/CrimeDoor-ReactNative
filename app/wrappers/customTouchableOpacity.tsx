import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styled } from "nativewind"; // Assuming you're using nativewind

const StyledTouchableOpacity = styled(TouchableOpacity);

const CustomTouchableOpacity = ({
  className,
  ...props
}: TouchableOpacityProps & { className?: string }) => {
  return <StyledTouchableOpacity className={className} {...props} />;
};

export default CustomTouchableOpacity;
