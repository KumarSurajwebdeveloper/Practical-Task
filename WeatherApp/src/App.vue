<template>
  <div id="app">
    <header>
      <h1>Weather App</h1>
    </header>
    <main>
      <SearchBar @search="fetchWeather" />
      <WeatherDisplay :weatherData="weatherData" />
    </main>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import WeatherDisplay from './components/WeatherDisplay.vue'
import { getWeatherByCity } from './services/weatherService'

export default {
  name: 'App',
  components: {
    SearchBar,
    WeatherDisplay
  },
  data() {
    return {
      weatherData: null
    }
  },
  methods: {
    async fetchWeather(city) {
      this.weatherData = await getWeatherByCity(city)
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
header {
  background-color: #42b983;
  color: white;
  padding: 20px;
}
main {
  padding: 20px;
}
</style>
