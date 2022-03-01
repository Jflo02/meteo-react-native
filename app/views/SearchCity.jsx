import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from './components/SearchBar'
import Api from '../models/Api'
import { useEffect } from 'react'
import CityPicker from './components/CityPicker'
import { Button } from 'react-native-paper'

export default function App({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [valueResearch, setvalueResearch] = React.useState()

  const meteoAPI = new Api()
  useEffect(() => {
    fetchMeteo(searchQuery)
  }, [searchQuery])

  const fetchMeteo = async (searchQuery) => {
    console.log('searchquery')
    if (searchQuery.length >= 2) {
      const result = await meteoAPI.search(searchQuery)
      setvalueResearch(result.cities)
    } 
    else {
      // @ts-ignore
      setvalueResearch([])
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={styles.text}>
          Bienvenue sur votre application météo favorite Entrez une ville
        </Text>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setvalueResearch={setvalueResearch}
        />
        <CityPicker navigation={navigation} cities={valueResearch} />
        <Button onPress={() => console.log(valueResearch)}>cc</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `rgb(63,94,251)`,
  },
  text: {
    margin: 20,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {},
})
