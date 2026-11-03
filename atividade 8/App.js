
import React, { useState, useEffect, useContext, createContext } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// CÓDIGO 1

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{contador}</Text>
      <Button title="+1" onPress={() => setContador(contador + 1)} />
      <Button title="-1" onPress={() => setContador(contador - 1)} />
      <Button title="Zerar" onPress={() => setContador(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  numero: { fontSize: 24 },
});


// CÓDIGO 2

// export default function App() {
//   const [nome, setNome] = useState('');

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         placeholder="Digite seu nome"
//         value={nome}
//         onChangeText={setNome}
//       />
//       <Text>
//         {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
//       </Text>
//     </View>
//   );
// }


// CÓDIGO 3

// export default function App() {
//   const [contador, setContador] = useState(0);

//   function somarTres() {
//     setContador(anterior => anterior + 1);
//     setContador(anterior => anterior + 1);
//     setContador(anterior => anterior + 1);
//   }

//   return (
//     <View>
//       <Text>{contador}</Text>
//       <Button title="Somar 3" onPress={somarTres} />
//     </View>
//   );
// }


// CÓDIGO 4

// export default function App() {
//   const [usuario, setUsuario] = useState({
//     nome: '',
//     email: '',
//     idade: 0,
//   });

//   function atualizar(campo, valor) {
//     setUsuario(ant => ({ ...ant, [campo]: valor }));
//   }

//   return (
//     <View>
//       <TextInput
//         placeholder="Nome"
//         value={usuario.nome}
//         onChangeText={texto => atualizar('nome', texto)}
//       />
//       <TextInput
//         placeholder="Email"
//         value={usuario.email}
//         onChangeText={texto => atualizar('email', texto)}
//       />
//       <Text>{usuario.nome}</Text>
//       <Text>{usuario.email}</Text>
//     </View>
//   );
// }


// CÓDIGO 5

// export default function App() {
//   const [tarefas, setTarefas] = useState([]);
//   const [texto, setTexto] = useState('');

//   const adicionar = texto =>
//     setTarefas(ant => [
//       ...ant,
//       { id: Date.now().toString(), texto, feita: false },
//     ]);

//   const remover = id =>
//     setTarefas(ant => ant.filter(t => t.id !== id));

//   const alternar = id =>
//     setTarefas(ant =>
//       ant.map(t =>
//         t.id === id ? { ...t, feita: !t.feita } : t
//       )
//     );

//   return (
//     <View>
//       <TextInput
//         placeholder="Nova tarefa"
//         value={texto}
//         onChangeText={setTexto}
//       />
//       <Button
//         title="Adicionar"
//         onPress={() => {
//           if (texto.trim()) {
//             adicionar(texto);
//             setTexto('');
//           }
//         }}
//       />
//       {tarefas.map(t => (
//         <View key={t.id}>
//           <Text>{t.texto} {t.feita ? '✓' : ''}</Text>
//           <Button title="Alternar" onPress={() => alternar(t.id)} />
//           <Button title="Remover" onPress={() => remover(t.id)} />
//         </View>
//       ))}
//     </View>
//   );
// }


// CÓDIGO 6

// function Lista({ dados }) {
//   return (
//     <View>
//       {dados.map(item => (
//         <Text key={item.id}>{item.name}</Text>
//       ))}
//     </View>
//   );
// }

// export default function App() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [carregando, setCarregando] = useState(true);

//   useEffect(() => {
//     async function carregar() {
//       try {
//         const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
//         const dados = await resposta.json();
//         setUsuarios(dados);
//       } finally {
//         setCarregando(false);
//       }
//     }

//     carregar();
//   }, []);

//   if (carregando) return <ActivityIndicator />;
//   return <Lista dados={usuarios} />;
// }


// CÓDIGO 7

// function DetalhePost({ postId }) {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     setPost(null);
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then(r => r.json())
//       .then(setPost);
//   }, [postId]);

//   if (!post) return <ActivityIndicator />;
//   return <Text>{post.title}</Text>;
// }

// export default function App() {
//   const [postId, setPostId] = useState(1);

//   return (
//     <View>
//       <DetalhePost postId={postId} />
//       <Button
//         title="Próximo post"
//         onPress={() => setPostId(p => p + 1)}
//       />
//     </View>
//   );
// }


// CÓDIGO 8

// export default function App() {
//   const [segundos, setSegundos] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSegundos(s => s + 1);
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return <Text>{segundos}s</Text>;
// }


// CÓDIGO 9

// export default function App() {
//   const [termo, setTermo] = useState('');
//   const [resultados, setResultados] = useState([]);

//   useEffect(() => {
//     if (termo.length < 3) {
//       setResultados([]);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       const r = await fetch(
//         `https://dummyjson.com/products/search?q=${encodeURIComponent(termo)}`
//       );
//       const dados = await r.json();
//       setResultados(dados.products);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [termo]);

//   return (
//     <View>
//       <TextInput
//         placeholder="Buscar produto"
//         value={termo}
//         onChangeText={setTermo}
//       />
//       {resultados.map(item => (
//         <Text key={item.id}>{item.title}</Text>
//       ))}
//     </View>
//   );
// }


// CÓDIGO 10

// const TemaContext = createContext();

// const cores = {
//   claro: { fundo: '#FFFFFF', texto: '#111111', primaria: '#6200EE' },
//   escuro: { fundo: '#121212', texto: '#EEEEEE', primaria: '#BB86FC' },
// };

// function TemaProvider({ children }) {
//   const [modo, setModo] = useState('claro');
//   const alternarTema = () =>
//     setModo(m => (m === 'claro' ? 'escuro' : 'claro'));

//   return (
//     <TemaContext.Provider value={{ modo, cores: cores[modo], alternarTema }}>
//       {children}
//     </TemaContext.Provider>
//   );
// }

// function Home() {
//   const { modo, cores, alternarTema } = useContext(TemaContext);

//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: cores.fundo,
//     }}>
//       <Text style={{ color: cores.texto }}>
//         Tema atual: {modo}
//       </Text>
//       <Button title="Trocar tema" onPress={alternarTema} />
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


// CÓDIGO 11

// const AuthContext = createContext(null);

// function AuthProvider({ children }) {
//   const [usuario, setUsuario] = useState(null);

//   const login = email =>
//     setUsuario({ nome: 'Ana', email });

//   const logout = () => setUsuario(null);

//   return (
//     <AuthContext.Provider value={{
//       usuario,
//       logado: !!usuario,
//       login,
//       logout,
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error('useAuth fora do AuthProvider');
//   return ctx;
// }

// function Login() {
//   const [email, setEmail] = useState('');
//   const { login } = useAuth();

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <Button title="Entrar" onPress={() => login(email)} />
//     </View>
//   );
// }

// function Home() {
//   const { usuario, logout } = useAuth();

//   return (
//     <View>
//       <Text>Olá, {usuario.nome}</Text>
//       <Text>{usuario.email}</Text>
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
