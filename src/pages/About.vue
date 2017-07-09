<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>All about stuff</h2>
  </div>
</template>

<script lang="ts">

export default {
  name: 'about',
  data ()
  {
      return {
          msg: 'App About Page'
      }
  }
};

</script>

<style lang="scss" scoped>

</style>