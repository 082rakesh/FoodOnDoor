import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {Spacing} from '../themes/Spacing';
import {Palette} from '../themes/Palette';

export type Props = {
  children: React.ReactElement;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
};

const CardView = ({children, style = {}, onPress, disabled}: Props) => {
  return (
    <Pressable
      disabled={disabled || !onPress}
      style={[styles.container, style]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Spacing.xs,
    backgroundColor: Palette.greyLight,
    borderRadius: 10,
    padding: Spacing.s,
  },
});

export default CardView;
