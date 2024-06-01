<template>
  <div v-if="weatherData">
    <h2>{{ weatherData.name }}</h2>
    <p>Temperature: {{ weatherData.main.temp }} °C</p>
    <p>Condition: {{ weatherData.weather[0].description }}</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherDisplay',
  props: {
    weatherData: Object
  }
}
</script>

<style scoped>
h2 {
  margin: 20px 0;
}
p {
  margin: 5px 0;
}
</style>
