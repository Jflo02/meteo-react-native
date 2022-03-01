import React from 'react'
import { FlatList, Text } from 'react-native'
import CityRow from './CityRow'

const CityPicker = ({ cities, navigation }) => {
  const _renderItem = ({ item }) =>
    cities.indexOf(item) < 5 && (
      <CityRow navigation={navigation} item={item}></CityRow>
    )

  return <FlatList data={cities} renderItem={_renderItem} />
}

export default CityPicker
