import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle,props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#EEEEEE',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#EEEEEE',
    position: 'relative',
  },
};

export default CardSection ;
