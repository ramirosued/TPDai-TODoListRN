import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Form = ({ setTareas, tareas }) => {
  // Estado para almacenar el texto de la tarea
  const [textoTarea, setTextoTarea] = useState('');

  // Maneja el evento de presionar el botón
  const handlePress = () => {
    const texto = textoTarea.trim();
    if (texto.length === 0) {
      Alert.alert('Advertencia', 'No ingresaste ninguna tarea');
    } else {
      Alert.alert(
        'Confirmación',
        '¿Deseas agregar la tarea?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Agregar',
            onPress: () => {
              setTareas([
                ...tareas,
                {
                  id: Date.now().toString(), // Usa una cadena para el ID
                  texto: texto, // Usa `texto` en lugar de `textoTarea`
                  tiempo: new Date().toLocaleTimeString(), // Tiempo actual
                  completada: false, // Inicialmente incompleta
                },
              ]);
              setTextoTarea(''); // Limpia el campo de texto usando `setTextoTarea`
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu tarea aquí"
        value={textoTarea}
        onChangeText={setTextoTarea}
      />
      <Button title="Agregar" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default Form;
