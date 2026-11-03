
// CÓDIGO 1

import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  // roda UMA vez, quando o componente aparece
  useEffect(() => {
    console.log('montou!');
  }, []);

  // roda toda vez que "contador" muda
  useEffect(() => {
    console.log('contador mudou para:', contador);
  }, [contador]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}


// CÓDIGO 2

// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log('tick');
//     }, 1000);

//     // Limpeza: para o timer quando o componente some
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Timer funcionando</Text>
//     </View>
//   );
// }


// CÓDIGO 3

// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// function Usuario({ id }) {
//   const [usuario, setUsuario] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(res => res.json())
//       .then(dados => setUsuario(dados));
//   }, [id]);

//   if (!usuario) return <Text>Carregando...</Text>;

//   return <Text>{usuario.name}</Text>;
// }

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Usuario id={1} />
//     </View>
//   );
// }
