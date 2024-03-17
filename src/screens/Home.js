import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const availableRooms = [
    { id: '1', name: 'Room 1' },
    { id: '2', name: 'Room 2' },
    { id: '3', name: 'Room 3' },
    // Add more rooms as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.roomItem}>
      <Text>{item.name}</Text>
    </View>
  );

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
          <FlatList
            data={availableRooms}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity style={styles.plusButton} onPress={() => console.log('Plus button clicked')}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
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
  },
  plusButton: {
    position: 'absolute',
    bottom: 20, // Adjust the bottom value as needed
    alignSelf: 'center',
    backgroundColor: '#43C6DB',
    padding: 10,
    borderRadius: 30,
    zIndex: 1,
  },
});
