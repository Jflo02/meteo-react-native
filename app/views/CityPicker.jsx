import React from 'react'
import { FlatList, Text } from 'react-native'
import UserRow from './components/CityRow'
const CityPicker = ({ cities }) => {
  const _renderItem = ({ item }) =>
    cities.indexOf(item) < 5 && <UserRow city={item.name}></UserRow>

  return <FlatList data={cities} renderItem={_renderItem} />
}

export default CityPicker
