import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, TextInput, Headline } from 'react-native-paper';
import globalStyles from '../styles/global';

function NuevoCliente(): React.JSX.Element {
 
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

      <TextInput/>
    </View>
  );
}

export default NuevoCliente;
