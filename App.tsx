import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Inicio'
      >
        <Stack.Screen
          name='Inicio'
          component={Inicio}
        />
        <Stack.Screen
          name='NuevoCliente'
          component={NuevoCliente}
          options={{
            title: 'Nuevo Cliente',
          }}
        />
        <Stack.Screen
          name='DetallesCliente'
          component={Inicio}
          options={{
            title: 'Detalles Cliente',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
