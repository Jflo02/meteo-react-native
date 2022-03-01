import React from "react";
import { FlatList, Text } from "react-native";

const CityPicker = ({ cities }) => {
  const _renderItem = ({ item }) => <Text>{item}</Text>;

  return <FlatList data={cities} renderItem={_renderItem} />;
};

export default CityPicker;
