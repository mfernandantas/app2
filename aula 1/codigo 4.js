import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './logo.webp'; 

export default function App() {
  return (
   <View style={styles.box}>
<Text>Texto no app</Text>
<Image source={logo} />
</View>
  )
}


