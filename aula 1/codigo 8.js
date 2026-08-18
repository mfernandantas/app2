import { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  // Corrigido: movido para dentro da função
  const [nome, setNome] = useState('');

  return (
    <View>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
    </View> 
  );
}
