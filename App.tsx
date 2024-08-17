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
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    }
  };
 
  return (
    <NavigationContainer>
       <StatusBar barStyle="light-content" backgroundColor="#2D4B73" />
      <Stack.Navigator
        initialRouteName='Inicio'
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: theme.colors.surface,
          },
          headerTitleAlign: 'center',
        }}
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
          component={DetallesCliente}
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
