import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default function ScheduleScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(moment(date).format('DD/MM/YYYY HH:mm'));
    hideDatePicker();
  };

  const confirmAppointment = () => {
    if (selectedDate) {
      Alert.alert('Agendamento Confirmado', Seu horário foi agendado para: ${selectedDate});
    } else {
      Alert.alert('Erro', 'Por favor, selecione uma data e horário.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o Horário</Text>
      <Button title="Escolher Data e Hora" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {selectedDate && <Text style={styles.selectedDate}>Horário selecionado: {selectedDate}</Text>}
      <Button title="Confirmar Agendamento" onPress={confirmAppointment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 18,
  },
});
