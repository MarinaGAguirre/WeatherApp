import React from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props   
  const { container, textTheme } = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={45} color={iconColor}/>
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
})
export default IconText