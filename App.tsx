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
import HeaderBar from './components/ui/HeaderBar';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    }
  };
 
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
       <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
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
          options={ ({navigation, route}) => ({
            headerLeft: (props) => <HeaderBar {...props}
                                      navigation={navigation}
                                      route={route}
                                    />
          })}
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
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
