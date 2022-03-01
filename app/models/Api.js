import axios from 'axios'

export default class Api {
  token = 'c0dcb222acf4e0a5c94b21def61ff0880e7a2071b4e0778e79ab62189dcd0816'

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
