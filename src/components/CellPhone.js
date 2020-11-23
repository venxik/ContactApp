import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Color from '../Constant/Color';
import { useNavigation } from '@react-navigation/native'

const CellPhone = (props) => {
  const { index, photo, firstName, lastName, isReplace } = props
  const navigation = useNavigation()
  return (
    <View
      key={index}
      style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={{ uri: photo || "" }} />
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          isReplace ?
            navigation.replace("DetailContact", props)
            :
            navigation.push("DetailContact", props)

        }}>
        <Text style={styles.text}>
          {`${firstName} ${lastName}`}
        </Text>
        <Text>
          0812321321
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ borderRadius: 50, marginLeft: 6, padding: 4 }}>
        <Foundation name={'telephone'} size={26} color={Color.color_two_500} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
    backgroundColor: 'lightgray'
  },
  text: {
    fontSize: 18, 
    fontWeight: 'bold' 
  }
})
export default CellPhone
