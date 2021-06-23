<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
      <p>Loading Jobs...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    // fetch data and return in json format - asynchronous (running in parallel with other functions) & returns promise
    fetch("http://localhost:3000/jobs")
      // once data is fetched -> pass it into JS
      .then((res) => res.json())
      // receive data & populate array with the data
      .then((data) => (this.jobs = data))
      // if there are any errors -> log out message
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}
</style>