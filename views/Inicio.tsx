import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { 
  List,
  Headline,
  FAB,
  MD3LightTheme as DefaultTheme
} from 'react-native-paper';
import axios from 'axios';
import urlApi from '../api/url';
import globalStyles from '../styles/global';

function Inicio({
  navigation,
}): React.JSX.Element {
 
  const [clientes, setClientes] = useState([]);

  useEffect( () => {
    const unsubscribe = navigation.addListener('focus', () => {
      const getClientesApi = async () => {
        try {
          const res = await axios.get(urlApi);
          setClientes(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      getClientesApi();
  });
  return unsubscribe;
  },[navigation]);

  return (
    <View style={globalStyles.contenedor}>
      <Headline 
        style={globalStyles.titulo}
      >
        {clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes'}
      </Headline>
      <FlatList
        data={clientes}
        keyExtractor={ (cliente) => (cliente.id).toString() }
        renderItem={ ({item}) => (
          <List.Item
            style={styles.contenedio}
            title={item.nombre}
            description={item.empresa}
            onPress={ () => navigation.navigate('DetallesCliente', {item})}
          />
        )}
      />
      <FAB
        icon='plus'
        style={globalStyles.fab}
        onPress={ () => navigation.navigate('NuevoCliente')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedio: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#bbb3ce',
  },
});

export default Inicio;
