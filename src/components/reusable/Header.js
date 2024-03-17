import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export const Header = ({back=false, title="", onPress }) =>  { 
    const navigation = useNavigation();
    
    return (
        <LinearGradient
            colors={['#43C6DB', '#43C6DB', '#43C6DB']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <View style={{ flex: 1, flexDirection: 'row' }}>           
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 40,
                    alignItems: 'center',
                }}>
                    {back ? (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={{ uri: 'https://img.icons8.com/dusk/64/000000/back.png' }} // Replace with provided icon URL
                                style={{ width: 25, height: 25, tintColor: 'white' }} // Adjust size and tint color as needed
                            />
                        </TouchableOpacity>
                    ) : (
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: 40,
                            alignItems: 'center',
                        }}>
                            <Ionicons
                                name="chevron-back-outline"
                                size={25}
                                color={'white'}
                                onPress={() => navigation.goBack()}
                            />
                            <Ionicons
                                name="menu-outline"
                                size={20}
                                color={'white'}
                                onPress={() => navigation.openDrawer()}
                            />
                        </View>
                    )}
                </View>

                <Text style={{
                    color: '#fff',
                    fontSize: 18, // Adjust the font size as needed
                    marginLeft: 15,
                    fontWeight: 'bold',
                }}>
                    Meeting Room Book
                </Text>
            </View>
            
            {onPress ? (
                <TouchableOpacity style={{ alignSelf: 'flex-end' }}>                
                    {/* <Image  source={require("../../assets/Images/setting.png")} style={{width:30,height:30,tintColor:'#fff'}}/> */}
                </TouchableOpacity>
            ) : null}
        </LinearGradient>
    );
}

const styles = {
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        padding: 10,
    }
};
