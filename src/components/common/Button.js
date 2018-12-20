import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { btnStyle, txtStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={txtStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  txtStyle: {
    alignSelf: 'center',
    padding: 10,
    color: 'salmon',
    fontSize: 18,
    fontWeight: 'bold',
    fontWeight: '600',
    paddingBottom: 10
  },
  btnStyle: {
    // flex: 1,
    // height: 48,
    // alignSelf: 'stretch',
    minWidth: 160,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: 'gray'
  }
}

export { Button };