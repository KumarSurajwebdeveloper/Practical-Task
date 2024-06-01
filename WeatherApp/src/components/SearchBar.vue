<template>
  <div>
    <input v-model="city" placeholder="Enter city name" @keyup.enter="search" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      city: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.city)
    }
  }
}
</script>

<style scoped>
input {
  padding: 8px;
  margin-right: 10px;
}
button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
