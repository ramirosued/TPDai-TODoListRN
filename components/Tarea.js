import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Tarea = ({ id, texto, tiempo, completada, tareas, setTareas }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto}</Text>
      {/* Puedes agregar más detalles aquí, como el tiempo y el estado de la tarea */}
      <Text style={styles.subTitle}>Tiempo: {tiempo}</Text>
      <Text style={styles.subTitle}>Completada: {completada ? 'Sí' : 'No'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Tarea;
