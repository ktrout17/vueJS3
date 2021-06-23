<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The Job ID is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading Job Details...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    // fetch data and return in json format - asynchronous (running in parallel with other functions) & returns promise
    fetch("http://localhost:3000/jobs/" + this.id)
      // once data is fetched -> pass it into JS
      .then((res) => res.json())
      // receive data & populate array with the data
      .then((data) => (this.job = data))
      // if there are any errors -> log out message
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>