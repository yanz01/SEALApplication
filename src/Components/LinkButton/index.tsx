import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './defaultCSS';

function Index(props) {
  const { onPress, title = 'Heeelo' } = props;

  return (<TouchableOpacity onPress={onPress}>
    <Text style={{...props.style, ...styles.text}}>{title}</Text>
  </TouchableOpacity>);
};

export default Index;
