import axios from 'axios'
// import env from 'react-native-dotenv'
// @ts-ignore
import { API_TOKEN_2 } from '@env'

export default class Api {
  token = API_TOKEN_2

  async search(city) {
    const url =
      'https://api.meteo-concept.com/api/location/cities?token=' +
      this.token +
      '&search=' +
      city
    return await axios.get(url).then((response) => response.data)
  }

  async forecasts(insee) {
    const url =
      'https://api.meteo-concept.com/api/forecast/daily?token=' +
      this.token +
      '&insee=' +
      insee
    return await axios.get(url).then((response) => response.data)
  }
}
