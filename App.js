import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Alert, View } from 'react-native';
import Titulo from './components/Titulo'; // Ajusta la ruta según tu estructura de carpetas
import Form from './components/Form';     // Ajusta la ruta según tu estructura de carpetas
import Tarea from './components/Tarea';   // Ajusta la ruta según tu estructura de carpetas

export default function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Titulo />

      <Form tareas={tareas} setTareas={setTareas} />

      <FlatList
        data={tareas}
        renderItem={({ item }) => (
          <Tarea
            tareas={tareas}
            setTareas={setTareas}
            id={item.id}
            texto={item.texto}
            tiempo={item.tiempo}
            completada={item.completada}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
});
