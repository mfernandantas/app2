// atividade 1
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicior1() {
//   return <View style={s.container} />;
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3498db',
//   },
// });

// atividade 2
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio2() {
//   return (
//     <View style={s.container}>
//       <View style={[s.quadrado, { backgroundColor: 'red' }]} />
//       <View style={[s.quadrado, { backgroundColor: 'green' }]} />
//       <View style={[s.quadrado, { backgroundColor: 'blue' }]} />
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   quadrado: {
//     width: 100,
//     height: 100,
//   },
// });

// atividade 3
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio3() {
//   return (
//     <View style={s.container}>
//       <View style={s.quadrado} />
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   quadrado: {
//     width: 150,
//     height: 150,
//     backgroundColor: 'red',
//   },
// });

// atividade 4
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio4() {
//   return (
//     <View style={s.container}>
//       <View style={[s.quadrado, { backgroundColor: 'red' }]} />
//       <View style={[s.quadrado, { backgroundColor: 'green' }]} />
//       <View style={[s.quadrado, { backgroundColor: 'blue' }]} />
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   quadrado: {
//     width: 80,
//     height: 80,
//   },
// });

// atividade 5
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio5() {
//   return (
//     <View style={s.container}>
//       <View style={[s.quadrado, { height: 50, backgroundColor: 'red' }]} />
//       <View style={[s.quadrado, { height: 100, backgroundColor: 'green' }]} />
//       <View style={[s.quadrado, { height: 75, backgroundColor: 'blue' }]} />
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   quadrado: {
//     width: 100,
//   },
// });

// atividade 6
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio6() {
//   return (
//     <View style={s.container}>
//       <View style={[s.quadrado, { backgroundColor: '#3498db' }]} />
//       <View style={[s.quadrado, { backgroundColor: '#e74c3c' }]} />
//       <View style={[s.quadrado, { backgroundColor: '#3498db' }]} />
//       <View style={[s.quadrado, { backgroundColor: '#e74c3c' }]} />
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   quadrado: {
//     width: 80,
//     height: 80,
//     marginVertical: 4,
//   },
// });

// atividade 7
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio7() {
//   return (
//     <View style={s.container}>
//       <View style={s.item}><Text>Item 1</Text></View>
//       <View style={s.item}><Text>Item 2</Text></View>
//       <View style={s.item}><Text>Item 3</Text></View>
//       <View style={s.item}><Text>Item 4</Text></View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     width: '100%',
//   },
//   item: {
//     flex: 1,
//   },
// });

// atividade 8
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio8() {
//   return (
//     <View style={s.container}>
//       <View style={s.foto} />
//       <Text style={s.nome}>Nome do Usuário</Text>
//       <Text style={s.bio}>Bio do usuário descrevendo suas informações principais.</Text>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 40,
//   },
//   foto: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#95a5a6',
//     marginBottom: 12,
//   },
//   nome: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   bio: {
//     fontSize: 14,
//     color: '#7f8c8d',
//     textAlign: 'center',
//   },
// });

// exercicio 9
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio9() {
//   return (
//     <View style={s.container}>
//       <View style={s.card} />
//       <View style={s.card} />
//       <View style={s.card} />
//       <View style={s.card} />
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 8,
//   },
//   card: {
//     width: '50%',
//     height: 120,
//     padding: 8,
//     backgroundColor: '#e0e0e0',
//     borderWidth: 4,
//     borderColor: '#fff',
//     borderRadius: 8,
//   },
// });

// exercicio 10
// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';

// export default function Exercicio10() {
//   return (
//     <View style={s.container}>
//       <View style={s.header}>
//         <Text style={s.headerTexto}>Header</Text>
//       </View>
//       <ScrollView style={s.conteudo}>
//         <View style={s.itemConteudo} />
//         <View style={s.itemConteudo} />
//         <View style={s.itemConteudo} />
//         <View style={s.itemConteudo} />
//       </ScrollView>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#2980b9',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerTexto: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   conteudo: {
//     flex: 1,
//   },
//   itemConteudo: {
//     height: 200,
//     backgroundColor: '#ecf0f1',
//     margin: 10,
//   },
// });

// exercicio 11
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio11() {
//   return (
//     <View style={s.container}>
//       <View style={s.conteudo} />
//       <View style={s.navbar}>
//         <View style={s.icone} />
//         <View style={s.icone} />
//         <View style={s.icone} />
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   conteudo: {
//     flex: 1,
//   },
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 60,
//     backgroundColor: '#2c3e50',
//     width: '100%',
//   },
//   icone: {
//     width: 30,
//     height: 30,
//     backgroundColor: '#ecf0f1',
//     borderRadius: 15,
//   },
// });

// exercicio 12
// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// export default function Exercicio13() {
//   return (
//     <View style={s.container}>
//       <View style={s.logo} />
//       <TextInput style={s.input} placeholder="Email" />
//       <TextInput style={s.input} placeholder="Senha" secureTextEntry />
//       <View style={s.botao}>
//         <Text style={s.botaoTexto}>Entrar</Text>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#3498db',
//     marginBottom: 24,
//   },
//   input: {
//     width: '100%',
//     height: 48,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginBottom: 12,
//   },
//   botao: {
//     width: '100%',
//     height: 48,
//     backgroundColor: '#2ecc71',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginTop: 12,
//   },
//   botaoTexto: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


// exercicio 13
// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// export default function Exercicio13() {
//   return (
//     <View style={s.container}>
//       <View style={s.logo} />
//       <TextInput style={s.input} placeholder="Email" />
//       <TextInput style={s.input} placeholder="Senha" secureTextEntry />
//       <View style={s.botao}>
//         <Text style={s.botaoTexto}>Entrar</Text>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#3498db',
//     marginBottom: 24,
//   },
//   input: {
//     width: '100%',
//     height: 48,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginBottom: 12,
//   },
//   botao: {
//     width: '100%',
//     height: 48,
//     backgroundColor: '#2ecc71',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginTop: 12,
//   },
//   botaoTexto: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// atividade 14
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio14() {
//   const itens = Array.from({ length: 9 });

//   return (
//     <View style={s.grade}>
//       {itens.map((_, index) => (
//         <View key={index} style={s.quadrado} />
//       ))}
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   grade: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: '100%',
//   },
//   quadrado: {
//     width: '33.33%',
//     aspectRatio: 1,
//     backgroundColor: '#bdc3c7',
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
// });

// atividade 15
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio15() {
//   return (
//     <View style={s.card}>
//       <View style={s.header}>
//         <View style={s.avatar} />
//         <Text style={s.nome}>Nome do Autor</Text>
//       </View>

//       <Text style={s.texto}>Este é o texto do post da rede social.</Text>
      
//       <View style={s.imagemPost} />

//       <View style={s.acoes}>
//         <Text style={s.botaoAcao}>Curtir</Text>
//         <Text style={s.botaoAcao}>Comentar</Text>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   card: {
//     padding: 12,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#7f8c8d',
//     marginRight: 8,
//   },
//   nome: {
//     fontWeight: 'bold',
//   },
//   texto: {
//     marginBottom: 8,
//   },
//   imagemPost: {
//     width: '100%',
//     height: 200,
//     backgroundColor: '#dcdde1',
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   acoes: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   botaoAcao: {
//     color: '#3498db',
//     fontWeight: '600',
//   },
// });

// atividade 16
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio16() {
//   return (
//     <View style={s.container}>
//       <View style={s.item}>
//         <View style={s.foto} />
//         <View style={s.info}>
//           <Text style={s.nome}>Nome do Item</Text>
//         </View>
//         <Text style={s.preco}>R$ 49,90</Text>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   foto: {
//     width: 50,
//     height: 50,
//     borderRadius: 8,
//     backgroundColor: '#bdc3c7',
//   },
//   info: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   nome: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   preco: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#27ae60',
//   },
// });

// atividade 17
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio17() {
//   return (
//     <View style={s.container}>
//       <View style={s.card}>
//         <View style={s.icone} />
//         <Text style={s.numero}>120</Text>
//       </View>
//       <View style={s.card}>
//         <View style={s.icone} />
//         <Text style={s.numero}>45</Text>
//       </View>
//       <View style={s.card}>
//         <View style={s.icone} />
//         <Text style={s.numero}>89%</Text>
//       </View>
//       <View style={s.card}>
//         <View style={s.icone} />
//         <Text style={s.numero}>12</Text>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 8,
//   },
//   card: {
//     width: '50%',
//     height: '50%',
//     padding: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderWidth: 4,
//     borderColor: '#fff',
//     borderRadius: 12,
//   },
//   icone: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#3498db',
//     marginBottom: 8,
//   },
//   numero: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// atividade 18
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio18() {
//   return (
//     <View style={s.container}>
//       <View style={[s.balao, s.recebida]}>
//         <Text style={s.remetente}>Ana</Text>
//         <Text style={s.texto}>Oi, tudo bem?</Text>
//         <Text style={s.hora}>10:00</Text>
//       </View>

//       <View style={[s.balao, s.enviada]}>
//         <Text style={s.texto}>Tudo ótimo! E com você?</Text>
//         <Text style={s.hora}>10:02</Text>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 12,
//     gap: 8,
//   },
//   balao: {
//     maxWidth: '80%',
//     padding: 10,
//     borderRadius: 8,
//   },
//   recebida: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#e0e0e0',
//   },
//   enviada: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#dcf8c6',
//   },
//   remetente: {
//     fontWeight: 'bold',
//     fontSize: 12,
//     color: '#075e54',
//     marginBottom: 2,
//   },
//   texto: {
//     fontSize: 14,
//   },
//   hora: {
//     fontSize: 10,
//     color: '#888',
//     alignSelf: 'flex-end',
//     marginTop: 4,
//   },
// });

// atividade 19
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio19() {
//   return (
//     <View style={s.container}>
//       <View style={s.linhaCentral} />

//       <View style={[s.itemEvento, s.esquerda]}>
//         <View style={s.conteudo}>
//           <Text style={s.titulo}>Evento 1</Text>
//         </View>
//         <View style={s.circulo} />
//       </View>

//       <View style={[s.itemEvento, s.direita]}>
//         <View style={s.circulo} />
//         <View style={s.conteudo}>
//           <Text style={s.titulo}>Evento 2</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     paddingVertical: 20,
//   },
//   linhaCentral: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: '50%',
//     width: 2,
//     backgroundColor: '#bdc3c7',
//     marginLeft: -1,
//   },
//   itemEvento: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 12,
//     width: '100%',
//   },
//   esquerda: {
//     justifyContent: 'flex-end',
//     paddingRight: '50%',
//   },
//   direita: {
//     justifyContent: 'flex-start',
//     paddingLeft: '50%',
//   },
//   circulo: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#3498db',
//     zIndex: 1,
//   },
//   conteudo: {
//     padding: 8,
//     backgroundColor: '#ecf0f1',
//     borderRadius: 6,
//     marginHorizontal: 8,
//   },
//   titulo: {
//     fontSize: 12,
//   },
// });

// atividade 20
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Exercicio20() {
  return (
    <View style={s.container}>
      <View style={s.linha}>
        <Text style={s.label}>Nome:</Text>
        <TextInput style={s.input} />
      </View>

      <View style={s.linha}>
        <Text style={s.label}>Email:</Text>
        <TextInput style={s.input} />
      </View>

      <View style={s.botao}>
        <Text style={s.botaoTexto}>Enviar</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    width: 80,
    textAlign: 'right',
    marginRight: 12,
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  botao: {
    height: 44,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 16,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});