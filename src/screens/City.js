import React from 'react'
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View
} from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
  const { name, country, sunrise, sunset } = weatherData
  const { 
    container,
    cityName,
    countryName,
    cityText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    imageLayout
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background-paris.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 28,
    marginTop: 35
  },
  countryName: {
    fontSize: 26
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white'
  },
  riseSetWrapper: {
    //justifyContent: 'space-around',
    justifyContent: 'center',
    marginTop: 80
  },
  riseSetText: {
    fontSize: 24,
    fontWeight: 'light',
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'column',
    marginTop: 100
  }
})

export default City
