import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);

  const availableRoomsData = [
    { id: '1', name: 'Room 1' },
    { id: '2', name: 'Room 2' },
    { id: '3', name: 'Room 3' },
    // Add more rooms as needed
  ];

  const handleConfirmTimeSlot = () => {
    // Validate the selected time slot
    if (selectedStartTime === '' || selectedEndTime === '') {
      Alert.alert('Error', 'Please select start and end time.');
      return;
    }

    // Make an API call to fetch available rooms based on selected time slot
    fetchAvailableRooms(selectedStartTime, selectedEndTime);
  };

  const fetchAvailableRooms = async (startTime, endTime) => {
    // Mock API call - Replace with your actual API call
    // Example: const response = await fetch(`YOUR_BACKEND_API_URL?start=${startTime}&end=${endTime}`);
    // Mock API response
    const response = { rooms: availableRoomsData }; // Mocking the response with available rooms data

    // Update available rooms state
    setAvailableRooms(response.rooms);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.roomItem} onPress={() => handleRoomSelection(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleRoomSelection = (room) => {
    // Handle room selection logic (e.g., navigate to booking screen, display booking details, etc.)
    console.log('Selected Room:', room);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Available Rooms</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.timePicker}>
            <TouchableOpacity onPress={() => setSelectedStartTime('9:00 AM')}>
              <Text style={styles.timeText}>Start Time</Text>
              <Ionicons name="time-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedEndTime('10:00 AM')}>
              <Text style={styles.timeText}>End Time</Text>
              <Ionicons name="time-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmTimeSlot}>
            <Text style={styles.buttonText}>Confirm Time Slot</Text>
          </TouchableOpacity>

          {/* Display available rooms */}
          <FlatList
            data={availableRooms}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      Plus button for selecting time slot
      {/* <TouchableOpacity style={styles.plusButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity> */}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#43C6DB',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  roomItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  plusButton: {
    position: 'absolute',
    bottom: 20, // Adjust the bottom value as needed
    right: 20, // Adjust the right value as needed
    backgroundColor: '#43C6DB',
    padding: 10,
    borderRadius: 30,
    zIndex: 1,
  },
  confirmButton: {
    backgroundColor: '#43C6DB',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  timePicker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
