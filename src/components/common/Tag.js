import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Tag = ({ onPress, children }) => {
  const { tagStyle, txtStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={tagStyle}>
      <Text style={txtStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  txtStyle: {
    alignSelf: 'center',
    padding: 4,
    color: 'salmon',
    fontSize: 8,
    fontWeight: '600',
  },
  tagStyle: {
    height: 20,
    backgroundColor: 'skyblue',
    borderRadius: 10,
  }
}

export { Tag };