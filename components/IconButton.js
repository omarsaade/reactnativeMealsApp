import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const IconButton = ({icon, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Entypo name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
