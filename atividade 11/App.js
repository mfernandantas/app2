// exemplo 1
// import React, { createContext, useContext, useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const TemaContext = createContext();

// function Home() {
//   const { modo, alternarTema } = useContext(TemaContext);

//   return (
//     <View>
//       <Text>Tema atual: {modo}</Text>
//       <Button title="Trocar tema" onPress={alternarTema} />
//     </View>
//   );
// }

// export default function App() {
//   const [modo, setModo] = useState('claro');

//   function alternarTema() {
//     setModo(m => (m === 'claro' ? 'escuro' : 'claro'));
//   }

//   return (
//     <TemaContext.Provider value={{ modo, alternarTema }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Home />
//       </View>
//     </TemaContext.Provider>
//   );
// }
// exemplo 2
// import React, { createContext, useContext, useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const TemaContext = createContext();

// const cores = {
//   claro: {
//     fundo: '#FFFFFF',
//     texto: '#111111',
//     primaria: '#6200EE',
//   },
//   escuro: {
//     fundo: '#121212',
//     texto: '#EEEEEE',
//     primaria: '#BB86FC',
//   },
// };

// function TemaProvider({ children }) {
//   const [modo, setModo] = useState('claro');

//   function alternarTema() {
//     setModo(m => (m === 'claro' ? 'escuro' : 'claro'));
//   }

//   return (
//     <TemaContext.Provider
//       value={{ modo, cores: cores[modo], alternarTema }}
//     >
//       {children}
//     </TemaContext.Provider>
//   );
// }

// function Home() {
//   const { modo, cores, alternarTema } = useContext(TemaContext);

//   return (
//     <View
//       style={[
//         styles.container,
//         { backgroundColor: cores.fundo },
//       ]}
//     >
//       <Text style={[styles.titulo, { color: cores.texto }]}>
//         Tema atual: {modo}
//       </Text>

//       <Button
//         title="Trocar tema"
//         color={cores.primaria}
//         onPress={alternarTema}
//       />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <TemaProvider>
//       <Home />
//     </TemaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 16,
//   },
//   titulo: {
//     fontSize: 24,
//   },
// });
// exemplo 3
// import React, { createContext, useContext, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
// } from 'react-native';

// const AuthContext = createContext(null);

// function AuthProvider({ children }) {
//   const [usuario, setUsuario] = useState(null);

//   function login(email, senha) {
//     if (senha !== '123456') return false;

//     setUsuario({
//       nome: email.split('@')[0],
//       email,
//     });

//     return true;
//   }

//   function logout() {
//     setUsuario(null);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         usuario,
//         logado: !!usuario,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   const contexto = useContext(AuthContext);

//   if (!contexto) {
//     throw new Error('useAuth fora do <AuthProvider>');
//   }

//   return contexto;
// }

// function Login() {
//   const { login } = useAuth();

//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [erro, setErro] = useState('');

//   function entrar() {
//     const ok = login(email, senha);

//     if (!ok) {
//       setErro('Senha incorreta (dica: 123456)');
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Login</Text>

//       <TextInput
//         style={styles.campo}
//         placeholder="E-mail"
//         autoCapitalize="none"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         style={styles.campo}
//         placeholder="Senha"
//         secureTextEntry
//         value={senha}
//         onChangeText={setSenha}
//       />

//       {erro ? (
//         <Text style={styles.erro}>{erro}</Text>
//       ) : null}

//       <Button title="Entrar" onPress={entrar} />
//     </View>
//   );
// }

// function Home() {
//   const { usuario, logout } = useAuth();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>
//         Bem-vindo, {usuario.nome}!
//       </Text>

//       <Button title="Sair" onPress={logout} />
//     </View>
//   );
// }

// function Rotas() {
//   const { logado } = useAuth();

//   return logado ? <Home /> : <Login />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <Rotas />
//     </AuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     gap: 12,
//   },
//   titulo: {
//     fontSize: 28,
//     textAlign: 'center',
//   },
//   campo: {
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: 8,
//     padding: 10,
//   },
//   erro: {
//     color: 'red',
//   },
// });