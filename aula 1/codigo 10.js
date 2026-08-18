import { useState } from 'react';
import { View, TextInput, ScrollView, Text } from 'react-native';


function Saudacao({ nome }) {
  return <Text>Olá, {nome}!</Text>;
}

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View>
      
      <Saudacao nome="Ana" />
      <Saudacao nome="Beto" />
    </View> 
  );
}
