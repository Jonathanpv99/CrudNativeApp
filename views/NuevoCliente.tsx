import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { 
  Button, 
  TextInput, 
  Headline, 
  Paragraph, 
  Dialog, 
  Portal,
} from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';
import urlApi from '../api/url';

function NuevoCliente({
  navigation,
  route,
}): React.JSX.Element {
 
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  //almacenar cliente
  const handleSetCliente = async () => {
    // validar datos
    if(nombre === '' || telefono === '' || correo === '' || empresa === ''){
      setModalVisible(true);
    }
    // generar cliente
    const nuevoCliente = {
      nombre,
      telefono,
      correo,
      empresa,
    };
    // guardar cliente en API
    try {
      await axios.post(urlApi, nuevoCliente);
    } catch (error) {
      console.log(error);
    }
    // redireccionar
    navigation.navigate('Inicio');
    // reiniciar formulario
    setNombre('');
    setTelefono('');
    setCorreo('');
    setEmpresa('');
  }

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

      <TextInput
        style={styles.input}
        label='Nombre:'
        placeholder='Jonathan Peña'
        value={nombre}
        onChangeText={ (texto) => setNombre(texto) }
      />
      <TextInput
        style={styles.input}
        label='Telefono:'
        placeholder='444-555-6677'
        value={telefono}
        onChangeText={ (texto) => setTelefono(texto) }
      />
      <TextInput
        style={styles.input}
        label='Correo:'
        placeholder='Ejemplo@ejemplo.com'
        value={correo}
        onChangeText={ (texto) => setCorreo(texto) }
      />
      <TextInput
        style={styles.input}
        label='Nombre Empresa:'
        placeholder='Google'
        value={empresa}
        onChangeText={ (texto) => setEmpresa(texto) }
      />

      <Button
        icon='pencil-circle'
        mode='contained'
        onPress={ () => handleSetCliente() }
      >
        Guardar Cliente
      </Button>

      <Portal>
        <Dialog
          visible={modalVisible}
          onDismiss={ () => setModalVisible(false) }
        >
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              !Todos los Campos son Obligatoiors!
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={ () => setModalVisible(false) }
            >OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});

export default NuevoCliente;
