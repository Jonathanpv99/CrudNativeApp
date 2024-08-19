import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import urlApi from '../api/url';

function Inicio(): React.JSX.Element {
 
  const [clientes, setClientes] = useState([]);
  
  useEffect( () => {
    const getClientesApi = async () => {
      try {
        const res = await axios.get(urlApi);
        setClientes(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getClientesApi();
  },[]);

  return (
    <View>
      <Text>Inicio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Inicio;
