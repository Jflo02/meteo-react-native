import * as React from 'react'
import { Text } from 'react-native-elements'
const MeteoCity = ({ navigation, route }) => {
  return (
    <>
      <Text>On va afficher la meteo de la ville</Text>
      {console.log(route.params.insee)}
    </>
  )
}

export default MeteoCity
