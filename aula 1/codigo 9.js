import { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView, Text } from 'react-native';

export default function App() {
  // Corrigido: movido para dentro da função
  const [nome, setNome] = useState('');

  return (
    <View>
      <ScrollView>
<Text>Item 1</Text>
<Text>Item 2</Text>
<Text>Item 3</Text>
{/* ...e muitos outros */}
</ScrollView>
    </View> 
  );
}
