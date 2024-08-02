import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';

const Tarea = ({ id, texto, tiempo, completada, tareas, setTareas }) => {
  const [tachado, setTachado] = useState(true); // Inicializa el estado basado en la prop completada

  const eliminarTarea = () => {
    Alert.alert(
      'Confirmación',
      '¿Seguro que deseas eliminar la tarea?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Borrar',
          onPress: () => {
            setTareas(tareas.filter(tarea => tarea.id !== id));
          },
        },
      ]
    );
  };

let tiempoTomado = 0;
  const tacharTarea = () => {
    setTachado(!tachado)
    if (!tachado) {
      // Si la tarea no está tachada, la tachamos y actualizamos el tiempo
      tiempoTomado= Date.now() - id; // Calcula el tiempo desde que se marcó
      setTareas(
        tareas.map(t =>
          t.id === id
            ? { ...t, completada: true, tiempo: tiempoTomado }
            : t
        )
      );
    } else {
      // Si la tarea ya está tachada, la desmarcamos y reiniciamos el tiempo
      setTachado(false);
      setTareas(
        tareas.map(t =>
          t.id === id
            ? { ...t, completada: false, tiempo: 0 }
            : t
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={tacharTarea} style={styles.textContainer}>
        <Text style={[styles.title, tachado && styles.tachado]}>
          {texto}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={eliminarTarea} style={styles.button}>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1214/1214594.png' }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tachado: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  button: {
    padding: 5,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default Tarea;
