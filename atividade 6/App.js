// // // // // // // exercio 1

// // // // // // import React from 'react';
// // // // // // import { View, Text, Button, StyleSheet } from 'react-native';
// // // // // // import { NavigationContainer } from '@react-navigation/native';
// // // // // // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // // // // // const Stack = createNativeStackNavigator();

// // // // // // function Inicio({ navigation }) {
// // // // // //   return (
// // // // // //     <View style={estilos.container}>
// // // // // //       <Text style={estilos.titulo}>Tela Inicial</Text>

// // // // // //       <Button
// // // // // //         title="Ir para Detalhes"
// // // // // //         color="#7B1E3A"
// // // // // //         onPress={() => navigation.navigate('Detalhes')}
// // // // // //       />
// // // // // //     </View>
// // // // // //   );
// // // // // // }

// // // // // // function Detalhes({ navigation }) {
// // // // // //   return (
// // // // // //     <View style={estilos.container}>
// // // // // //       <Text style={estilos.titulo}>Tela de Detalhes</Text>

// // // // // //       <Button
// // // // // //         title="Voltar"
// // // // // //         color="#7B1E3A"
// // // // // //         onPress={() => navigation.goBack()}
// // // // // //       />
// // // // // //     </View>
// // // // // //   );
// // // // // // }

// // // // // // export default function App() {
// // // // // //   return (
// // // // // //     <NavigationContainer>
// // // // // //       <Stack.Navigator>
// // // // // //         <Stack.Screen
// // // // // //           name="Inicio"
// // // // // //           component={Inicio}
// // // // // //           options={{
// // // // // //             title: 'Início',
// // // // // //             headerStyle: { backgroundColor: '#7B1E3A' },
// // // // // //             headerTintColor: 'white'
// // // // // //           }}
// // // // // //         />
// // // // // //         <Stack.Screen
// // // // // //           name="Detalhes"
// // // // // //           component={Detalhes}
// // // // // //           options={{ title: 'Detalhes' }}
// // // // // //         />
// // // // // //       </Stack.Navigator>
// // // // // //     </NavigationContainer>
// // // // // //   );
// // // // // // }

// // // // // // const estilos = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: '#FCE4EC',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center'
// // // // // //   },
// // // // // //   titulo: {
// // // // // //     fontSize: 24,
// // // // // //     color: '#7B1E3A',
// // // // // //     marginBottom: 20
// // // // // //   }
// // // // // // });

// // // // // // exercicio 2

// // // // // import React, { useState } from 'react';
// // // // // import {
// // // // //   View, Text, Button, TextInput,
// // // // //   FlatList, StyleSheet
// // // // // } from 'react-native';
// // // // // import { NavigationContainer } from '@react-navigation/native';
// // // // // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // // // // const Stack = createNativeStackNavigator();

// // // // // const produtos = [
// // // // //   { id: '1', nome: 'Notebook', preco: 3500 },
// // // // //   { id: '2', nome: 'Mouse', preco: 80 },
// // // // //   { id: '3', nome: 'Teclado', preco: 150 }
// // // // // ];

// // // // // function Inicio({ navigation }) {
// // // // //   const [nome, setNome] = useState('');
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [idade, setIdade] = useState('');

// // // // //   return (
// // // // //     <View style={estilos.container}>
// // // // //       <Text style={estilos.titulo}>Cadastro</Text>

// // // // //       <TextInput
// // // // //         style={estilos.input}
// // // // //         placeholder="Nome"
// // // // //         value={nome}
// // // // //         onChangeText={setNome}
// // // // //       />

// // // // //       <TextInput
// // // // //         style={estilos.input}
// // // // //         placeholder="Email"
// // // // //         value={email}
// // // // //         onChangeText={setEmail}
// // // // //       />

// // // // //       <TextInput
// // // // //         style={estilos.input}
// // // // //         placeholder="Idade"
// // // // //         value={idade}
// // // // //         onChangeText={setIdade}
// // // // //       />

// // // // //       <Button
// // // // //         title="Enviar Nome"
// // // // //         color="#7B1E3A"
// // // // //         onPress={() => navigation.navigate('Dados', { nome })}
// // // // //       />

// // // // //       <Button
// // // // //         title="Enviar Cadastro"
// // // // //         color="#7B1E3A"
// // // // //         onPress={() => navigation.navigate('Dados', {
// // // // //           nome, email, idade
// // // // //         })}
// // // // //       />

// // // // //       <Button
// // // // //         title="Ver Produtos"
// // // // //         color="#7B1E3A"
// // // // //         onPress={() => navigation.navigate('Produtos')}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // function Dados({ route }) {
// // // // //   const { nome, email, idade } = route.params || {};

// // // // //   return (
// // // // //     <View style={estilos.container}>
// // // // //       <Text style={estilos.titulo}>Dados Recebidos</Text>
// // // // //       <Text>Nome: {nome || 'Não informado'}</Text>
// // // // //       <Text>Email: {email || 'Não informado'}</Text>
// // // // //       <Text>Idade: {idade || 'Não informada'}</Text>
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // function Produtos({ navigation }) {
// // // // //   return (
// // // // //     <View style={estilos.container}>
// // // // //       <Text style={estilos.titulo}>Produtos</Text>

// // // // //       <FlatList
// // // // //         data={produtos}
// // // // //         keyExtractor={(item) => item.id}
// // // // //         renderItem={({ item }) => (
// // // // //           <View style={estilos.item}>
// // // // //             <Text>{item.nome} - R$ {item.preco}</Text>

// // // // //             <Button
// // // // //               title="Detalhes"
// // // // //               color="#7B1E3A"
// // // // //               onPress={() => navigation.navigate('Produto', item)}
// // // // //             />
// // // // //           </View>
// // // // //         )}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // function Produto({ route }) {
// // // // //   const { nome = 'Produto', preco = 0 } = route.params || {};

// // // // //   return (
// // // // //     <View style={estilos.container}>
// // // // //       <Text style={estilos.titulo}>{nome}</Text>
// // // // //       <Text>Preço: R$ {preco}</Text>
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // export default function App() {
// // // // //   return (
// // // // //     <NavigationContainer>
// // // // //       <Stack.Navigator
// // // // //         screenOptions={{
// // // // //           headerStyle: { backgroundColor: '#7B1E3A' },
// // // // //           headerTintColor: 'white'
// // // // //         }}
// // // // //       >
// // // // //         <Stack.Screen name="Inicio" component={Inicio} />
// // // // //         <Stack.Screen name="Dados" component={Dados} />
// // // // //         <Stack.Screen name="Produtos" component={Produtos} />
// // // // //         <Stack.Screen name="Produto" component={Produto} />
// // // // //       </Stack.Navigator>
// // // // //     </NavigationContainer>
// // // // //   );
// // // // // }

// // // // // const estilos = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#FCE4EC',
// // // // //     padding: 20
// // // // //   },
// // // // //   titulo: {
// // // // //     fontSize: 24,
// // // // //     color: '#7B1E3A',
// // // // //     marginBottom: 20
// // // // //   },
// // // // //   input: {
// // // // //     backgroundColor: 'white',
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#7B1E3A',
// // // // //     padding: 10,
// // // // //     marginBottom: 10
// // // // //   },
// // // // //   item: {
// // // // //     backgroundColor: 'white',
// // // // //     padding: 10,
// // // // //     marginBottom: 10
// // // // //   }
// // // // // });

// // // // // exercicio 3


// // // // import React from 'react';
// // // // import { View, Text, Button, StyleSheet } from 'react-native';
// // // // import { NavigationContainer } from '@react-navigation/native';
// // // // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // // // const Stack = createNativeStackNavigator();

// // // // function Home({ navigation }) {
// // // //   return (
// // // //     <View style={estilos.container}>
// // // //       <Text style={estilos.titulo}>Home</Text>
// // // //       <Text>Bem-vindo à tela inicial!</Text>

// // // //       <Button
// // // //         title="Ir para Busca"
// // // //         color="#7B1E3A"
// // // //         onPress={() => navigation.navigate('Busca')}
// // // //       />

// // // //       <Button
// // // //         title="Ir para Perfil"
// // // //         color="#7B1E3A"
// // // //         onPress={() => navigation.navigate('Perfil')}
// // // //       />
// // // //     </View>
// // // //   );
// // // // }

// // // // function Busca({ navigation }) {
// // // //   return (
// // // //     <View style={estilos.container}>
// // // //       <Text style={estilos.titulo}>Busca</Text>
// // // //       <Text>Esta é a tela de busca.</Text>

// // // //       <Button
// // // //         title="Ir para Perfil"
// // // //         color="#7B1E3A"
// // // //         onPress={() => navigation.navigate('Perfil')}
// // // //       />
// // // //     </View>
// // // //   );
// // // // }

// // // // function Perfil({ navigation }) {
// // // //   return (
// // // //     <View style={estilos.container}>
// // // //       <Text style={estilos.titulo}>Perfil</Text>
// // // //       <Text>Esta é a tela de perfil.</Text>

// // // //       <Button
// // // //         title="Voltar"
// // // //         color="#7B1E3A"
// // // //         onPress={() => navigation.goBack()}
// // // //       />
// // // //     </View>
// // // //   );
// // // // }

// // // // export default function App() {
// // // //   return (
// // // //     <NavigationContainer>
// // // //       <Stack.Navigator
// // // //         screenOptions={{
// // // //           headerStyle: {
// // // //             backgroundColor: '#7B1E3A'
// // // //           },
// // // //           headerTintColor: 'white'
// // // //         }}
// // // //       >
// // // //         <Stack.Screen name="Home" component={Home} />
// // // //         <Stack.Screen name="Busca" component={Busca} />
// // // //         <Stack.Screen name="Perfil" component={Perfil} />
// // // //       </Stack.Navigator>
// // // //     </NavigationContainer>
// // // //   );
// // // // }

// // // // const estilos = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#FCE4EC',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     padding: 20,
// // // //     gap: 15
// // // //   },
// // // //   titulo: {
// // // //     fontSize: 24,
// // // //     color: '#7B1E3A',
// // // //     marginBottom: 20
// // // //   }
// // // // });
// // // // exercicio 4

// // // import React from 'react';
// // // import { View, Text, Button, StyleSheet } from 'react-native';
// // // import { NavigationContainer } from '@react-navigation/native';
// // // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // // const Stack = createNativeStackNavigator();

// // // function Home({ navigation }) {
// // //   return (
// // //     <View style={estilos.container}>
// // //       <Text style={estilos.titulo}>Página Inicial</Text>

// // //       <Button
// // //         title="Configurações"
// // //         color="#7B1E3A"
// // //         onPress={() => navigation.navigate('Configuracoes', {
// // //           tema: 'escuro'
// // //         })}
// // //       />

// // //       <Button
// // //         title="Sobre"
// // //         color="#7B1E3A"
// // //         onPress={() => navigation.navigate('Sobre')}
// // //       />
// // //     </View>
// // //   );
// // // }

// // // function Configuracoes({ route }) {
// // //   const tema = route.params?.tema || 'claro';

// // //   return (
// // //     <View style={estilos.container}>
// // //       <Text style={estilos.titulo}>Configurações</Text>
// // //       <Text>Tema: {tema}</Text>
// // //     </View>
// // //   );
// // // }

// // // function Sobre() {
// // //   return (
// // //     <View style={estilos.container}>
// // //       <Text style={estilos.titulo}>Sobre</Text>
// // //       <Text>Aplicativo de navegação.</Text>
// // //     </View>
// // //   );
// // // }

// // // export default function App() {
// // //   return (
// // //     <NavigationContainer>
// // //       <Stack.Navigator
// // //         screenOptions={{
// // //           headerStyle: { backgroundColor: '#7B1E3A' },
// // //           headerTintColor: 'white'
// // //         }}
// // //       >
// // //         <Stack.Screen name="Home" component={Home} />
// // //         <Stack.Screen
// // //           name="Configuracoes"
// // //           component={Configuracoes}
// // //           options={{ title: 'Configurações' }}
// // //         />
// // //         <Stack.Screen name="Sobre" component={Sobre} />
// // //       </Stack.Navigator>
// // //     </NavigationContainer>
// // //   );
// // // }

// // // const estilos = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#FCE4EC',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     gap: 15
// // //   },
// // //   titulo: {
// // //     fontSize: 24,
// // //     color: '#7B1E3A',
// // //     marginBottom: 20
// // //   }
// // // });

// // // exericicio 5

// // import React from 'react';
// // import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();

// // const filmes = [
// //   { id: '1', nome: 'Avatar', ano: 2009 },
// //   { id: '2', nome: 'Titanic', ano: 1997 },
// //   { id: '3', nome: 'Matrix', ano: 1999 }
// // ];

// // function Home({ navigation }) {
// //   return (
// //     <View style={estilos.container}>
// //       <Text style={estilos.titulo}>Lista de Filmes</Text>

// //       <FlatList
// //         data={filmes}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View style={estilos.item}>
// //             <Text>{item.nome}</Text>

// //             <Button
// //               title="Ver Detalhes"
// //               color="#7B1E3A"
// //               onPress={() => navigation.navigate('Detalhes', {
// //                 nome: item.nome,
// //                 ano: item.ano
// //               })}
// //             />
// //           </View>
// //         )}
// //       />

// //       <Button
// //         title="Meu Perfil"
// //         color="#7B1E3A"
// //         onPress={() => navigation.navigate('Perfil')}
// //       />
// //     </View>
// //   );
// // }

// // function Detalhes({ route }) {
// //   const { nome, ano } = route.params;

// //   return (
// //     <View style={estilos.container}>
// //       <Text style={estilos.titulo}>{nome}</Text>
// //       <Text>Ano de lançamento: {ano}</Text>
// //     </View>
// //   );
// // }

// // function Perfil() {
// //   return (
// //     <View style={estilos.container}>
// //       <Text style={estilos.titulo}>Meu Perfil</Text>
// //       <Text>Bem-vindo ao aplicativo de filmes!</Text>
// //     </View>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator
// //         screenOptions={{
// //           headerStyle: { backgroundColor: '#7B1E3A' },
// //           headerTintColor: 'white'
// //         }}
// //       >
// //         <Stack.Screen name="Home" component={Home} />
// //         <Stack.Screen name="Detalhes" component={Detalhes} />
// //         <Stack.Screen name="Perfil" component={Perfil} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // const estilos = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#FCE4EC',
// //     padding: 20
// //   },
// //   titulo: {
// //     fontSize: 24,
// //     color: '#7B1E3A',
// //     marginBottom: 20
// //   },
// //   item: {
// //     backgroundColor: 'white',
// //     padding: 15,
// //     marginBottom: 10
// //   }
// // });

// // exercicio 6

// import React from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const receitas = [
//   {
//     id: '1',
//     nome: 'Bolo de Cenoura',
//     ingredientes: 'Cenoura, ovos, farinha e açúcar',
//     preparo: 'Misture tudo e asse por 40 minutos.'
//   },
//   {
//     id: '2',
//     nome: 'Brigadeiro',
//     ingredientes: 'Leite condensado, chocolate e manteiga',
//     preparo: 'Mexa em fogo baixo até engrossar.'
//   }
// ];

// function Receitas({ navigation }) {
//   return (
//     <View style={estilos.container}>
//       <Text style={estilos.titulo}>Minhas Receitas</Text>

//       <FlatList
//         data={receitas}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={estilos.item}>
//             <Text>{item.nome}</Text>

//             <Button
//               title="Ver Receita"
//               color="#7B1E3A"
//               onPress={() => navigation.navigate('Detalhes', {
//                 receita: item
//               })}
//             />
//           </View>
//         )}
//       />

//       <Button
//         title="Favoritos"
//         color="#7B1E3A"
//         onPress={() => navigation.navigate('Favoritos')}
//       />
//     </View>
//   );
// }

// function Detalhes({ route }) {
//   const { receita } = route.params;

//   return (
//     <View style={estilos.container}>
//       <Text style={estilos.titulo}>{receita.nome}</Text>
//       <Text>Ingredientes: {receita.ingredientes}</Text>
//       <Text>Modo de preparo: {receita.preparo}</Text>
//     </View>
//   );
// }

// function Favoritos() {
//   return (
//     <View style={estilos.container}>
//       <Text style={estilos.titulo}>Receitas Favoritas</Text>
//       <Text>Bolo de Cenoura</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: { backgroundColor: '#7B1E3A' },
//           headerTintColor: 'white'
//         }}
//       >
//         <Stack.Screen name="Receitas" component={Receitas} />
//         <Stack.Screen name="Detalhes" component={Detalhes} />
//         <Stack.Screen name="Favoritos" component={Favoritos} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const estilos = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FCE4EC',
//     padding: 20
//   },
//   titulo: {
//     fontSize: 24,
//     color: '#7B1E3A',
//     marginBottom: 20
//   },
//   item: {
//     backgroundColor: 'white',
//     padding: 15,
//     marginBottom: 10
//   }
// });

// exercicio 7

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const contatos = [
  { id: '1', nome: 'Ana', telefone: '99999-1111', favorito: true },
  { id: '2', nome: 'Bruno', telefone: '99999-2222', favorito: false },
  { id: '3', nome: 'Carlos', telefone: '99999-3333', favorito: true }
];

function Contatos({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Meus Contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.item}>
            <Text>{item.nome}</Text>

            <Button
              title="Detalhes"
              color="#7B1E3A"
              onPress={() => navigation.navigate('Detalhes', {
                contato: item
              })}
            />
          </View>
        )}
      />

      <Button
        title="Favoritos"
        color="#7B1E3A"
        onPress={() => navigation.navigate('Favoritos')}
      />

      <Button
        title="Sobre"
        color="#7B1E3A"
        onPress={() => navigation.navigate('Sobre')}
      />
    </View>
  );
}

function Detalhes({ route }) {
  const { contato } = route.params;

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{contato.nome}</Text>
      <Text>Telefone: {contato.telefone}</Text>
    </View>
  );
}

function Favoritos() {
  const favoritos = contatos.filter((item) => item.favorito);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Favoritos</Text>

      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={estilos.item}>{item.nome}</Text>
        )}
      />
    </View>
  );
}

function Sobre() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Sobre</Text>
      <Text>Aplicativo para visualizar contatos.</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#7B1E3A' },
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name="Contatos" component={Contatos} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE4EC',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    color: '#7B1E3A',
    marginBottom: 20
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10
  }
});
