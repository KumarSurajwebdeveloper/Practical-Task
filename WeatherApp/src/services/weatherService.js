import axios from 'axios'

import { API_KEY } from '../config';

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
