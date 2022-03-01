import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CityRow = ({ city }) => (
  <View style={styles.row}>
    <View>
      <Text style={styles.primaryText}>{city}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },
})

export default CityRow
