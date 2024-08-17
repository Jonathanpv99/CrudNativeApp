import React from 'react';
import {
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

function HeaderBar({
  navigation,
  route,
}): React.JSX.Element {
 
  const handlePress = () => {
    navigation.navigate('NuevoCliente')
  }

  return (
    <View>
      <Button
        textColor='#fff'
        icon='plus-circle'
        onPress={ () => handlePress() }
      >
        Cliente
      </Button>
    </View>
  );
}

export default HeaderBar;
