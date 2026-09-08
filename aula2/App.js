// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Platform,
//   useWindowDimensions,
// } from 'react-native';

// // atividade 1
// export function Exercicio1() {
//   return <View style={s1.card} />;
// }

// const s1 = StyleSheet.create({
//   card: {
//     backgroundColor: '#61dafb',
//     padding: 16,
//     borderRadius: 8,
//   },
// });

// // atividade 2
// export function Exercicio2() {
//   return (
//     <View style={s2.card}>
//       <Text style={s2.texto}>Oi</Text>
//     </View>
//   );
// }

// const s2 = StyleSheet.create({
//   card: {
//     padding: 16,
//     backgroundColor: '#1B2130',
//     borderRadius: 12,
//   },
//   texto: { color: '#fff' },
// });

// // atividade 3
// export function Exercicio3() {
//   return (
//     <View style={s3.container}>
//       <Text style={s3.titulo}>Título</Text>
//     </View>
//   );
// }

// const s3 = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   titulo: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#E8EDF5',
//     marginBottom: 8,
//     paddingHorizontal: 16,
//     textTransform: 'uppercase',
//   },
// });

// // atividade 4
// export function Exercicio4() {
//   return (
//     <View style={s4.card}>
//       <Text style={s4.h1}>Título</Text>
//       <Text style={s4.corpo}>Corpo</Text>
//       <Text style={s4.legenda}>Legenda</Text>
//     </View>
//   );
// }

// const s4 = StyleSheet.create({
//   card: {
//     backgroundColor: '#1B2130',
//     padding: 16,
//   },
//   h1: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   corpo: {
//     color: '#ccc',
//     fontSize: 15,
//   },
//   legenda: {
//     color: '#888',
//     fontSize: 12,
//   },
// });

// // atividade 5
// export function Exercicio5() {
//   return (
//     <View style={s5.container}>
//       <Text style={s5.titulo}>Título da seção</Text>
//       <Text style={s5.corpo}>
//         Texto de apoio com lineHeight confortável, cor secundária e alinhamento à esquerda.
//       </Text>
//     </View>
//   );
// }

// const s5 = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: '700',
//     lineHeight: 28,
//     letterSpacing: 0.4,
//   },
//   corpo: {
//     fontSize: 15,
//     lineHeight: 22,
//     color: '#97A3B8',
//     textAlign: 'left',
//   },
// });

// // atividade 6
// export function Exercicio6() {
//   return (
//     <View style={s6.caixa}>
//       <Text>conteúdo</Text>
//     </View>
//   );
// }

// const s6 = StyleSheet.create({
//   caixa: {
//     width: 200,
//     padding: 16,
//     paddingHorizontal: 24,
//     paddingTop: 8,
//     margin: 8,
//     marginVertical: 16,
//     borderWidth: 1,
//     borderColor: '#323D54',
//     borderRadius: 12,
//     borderBottomWidth: 3,
//   },
// });

// // atividade 7
// export function Exercicio7() {
//   const { width } = useWindowDimensions();
//   const colunas = width > 600 ? 3 : 2;

//   return (
//     <View style={{ width: width / colunas }}>
//       <View style={s7.card} />
//     </View>
//   );
// }

// const s7 = StyleSheet.create({
//   card: {
//     width: 120,
//     aspectRatio: 16 / 9,
//     minHeight: 48,
//     maxWidth: 480,
//     borderWidth: StyleSheet.hairlineWidth,
//   },
// });

// // atividade 8
// export function Exercicio8() {
//   return <View style={s8.card} />;
// }

// const s8 = StyleSheet.create({
//   card: {
//     backgroundColor: '#1B2130',
//     borderRadius: 12,
//     padding: 16,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 6,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
// });

// // atividade 9
// export function Exercicio9() {
//   return (
//     <View style={s9.linha}>
//       <View style={s9.item} />
//       <View style={s9.item} />
//     </View>
//   );
// }

// const s9 = StyleSheet.create({
//   linha: {
//     flexDirection: 'row',
//   },
//   item: {
//     flex: 1,
//     height: 50,
//     backgroundColor: '#3498db',
//   },
// });

// // atividade 10
// export function Exercicio10() {
//   return (
//     <View style={s10.linha}>
//       <View style={s10.item} />
//       <View style={[s10.item, { alignSelf: 'flex-end' }]} />
//       <View style={s10.item} />
//     </View>
//   );
// }

// const s10 = StyleSheet.create({
//   linha: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     height: 150,
//   },
//   item: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#3498db',
//   },
// });

// // atividade 11
// export function Exercicio11() {
//   return (
//     <View style={{ flex: 1, flexDirection: 'row' }}>
//       <View style={{ flex: 2, backgroundColor: '#61DAFB' }} />
//       <View style={{ flex: 1, backgroundColor: '#FFB86C' }} />
//     </View>
//   );
// }

// // atividade 12
// export function Exercicio12() {
//   return (
//     <View style={s12.container}>
//       <View style={s12.avatar} />
//       <Text style={s12.texto}>flexShrink: 1</Text>
//       <Text style={s12.hora}>10:00</Text>
//     </View>
//   );
// }

// const s12 = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: '#ccc',
//   },
//   texto: {
//     flexShrink: 1,
//   },
//   hora: {
//     width: 50,
//   },
// });

// // atividade 13
// export function Exercicio13() {
//   return (
//     <View style={s13.grade}>
//       <View style={s13.chip} />
//       <View style={s13.chip} />
//     </View>
//   );
// }

// const s13 = StyleSheet.create({
//   grade: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 12,
//     rowGap: 8,
//     columnGap: 16,
//   },
//   chip: {
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//     borderRadius: 999,
//     backgroundColor: '#e0e0e0',
//   },
// });

// // atividade 14
// export function Exercicio14() {
//   return (
//     <View style={s14.card}>
//       <Image style={s14.foto} source={{ uri: 'https://via.placeholder.com/150' }} />
//       <View style={s14.selo}>
//         <Text style={s14.seloTexto}>NOVO</Text>
//       </View>
//     </View>
//   );
// }

// const s14 = StyleSheet.create({
//   card: {
//     position: 'relative',
//   },
//   foto: {
//     width: '100%',
//     height: 200,
//   },
//   selo: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     zIndex: 2,
//     backgroundColor: '#ff0000',
//     padding: 4,
//   },
//   seloTexto: {
//     color: '#fff',
//     fontSize: 10,
//   },
// });

// // atividade 15
// export function Exercicio15() {
//   return (
//     <SafeAreaView style={s15.tela}>
//       <View style={s15.header}>
//         <Text style={s15.titulo}>Conversas</Text>
//       </View>
//       <ScrollView style={s15.conteudo} />
//       <View style={s15.footer}>
//         <Text style={{ color: '#fff' }}>Nova mensagem</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const s15 = StyleSheet.create({
//   tela: {
//     flex: 1,
//     backgroundColor: '#12151C',
//   },
//   header: {
//     height: 56,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   titulo: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   conteudo: {
//     flex: 1,
//   },
//   footer: {
//     padding: 16,
//     borderTopWidth: 1,
//     borderColor: '#323D54',
//   },
// });