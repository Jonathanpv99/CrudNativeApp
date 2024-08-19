import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import { 
  Text,
  Headline, 
  Subheading,
  Button,
  FAB,
} from 'react-native-paper';
import globalStyles from '../styles/global';
import urlApi from '../api/url';
import axios from 'axios';

function DetallesCliente({
  navigation,
  route,
}): React.JSX.Element {

  const {nombre, telefono, correo, empresa, id} = route.params.item;

  const confirmacion = () => {
    Alert.alert(
      '¿Deses Eliminar este cliente?',
      '!Un cliente eliminado no se puede recuperar!',
      [
        {text: 'SI, Eliminar', onPress: () => handleEliminar()},
        {text: 'Cancelar', style: 'cancel'}
      ]
    )
  }

  const handleEliminar = async () => {
    try {
      await axios.delete(`${urlApi}/${id}`);
    } catch (error) {
      console.log(error);
    }

    //redireccionar
    navigation.navigate('Inicio');
  }

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>Empresa: <Subheading>{empresa}</Subheading></Text>
      <Text style={styles.texto}>Correo: <Subheading>{correo}</Subheading></Text>
      <Text style={styles.texto}>Telefono: <Subheading>{telefono}</Subheading></Text>

      <Button
        style={styles.btn}
        mode='contained'
        icon='cancel'
        onPress={ () => confirmacion()}
      >
        Eliminar Cliente
      </Button>
      <FAB
        icon='pencil'
        style={globalStyles.fab}
        onPress={ () => navigation.navigate('NuevoCliente', {cliente: route.params.item})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
  btn: {
    marginTop: 100,
    backgroundColor: 'red',
  },
});

export default DetallesCliente;
