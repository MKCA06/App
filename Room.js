import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from './src/components/reusable/Header'

const RoomComponent = () => {
  return (
    <View>
      <Header title="Meeting Room Booking" />
      {/* <Text>Room</Text> */}
    </View>
  )
}

export default RoomComponent;

const styles = StyleSheet.create({})