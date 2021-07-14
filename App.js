import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

const [clima, setClima] = useState("Llivioso")


const llamarServicioDeClima = (tipo) => setClima(tipo)



  return (
    <View style={styles.container}>
      <Text>Es un día {clima}</Text>
      <Text onPress={() => llamarServicioDeClima("soleado")}>Convertir</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
