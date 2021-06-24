<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import SingleProject from '../components/SingleProject.vue';

export default {
  name: 'Home',
  components: { SingleProject },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      // cycle through projects and if id is equal to id of project we want to delete, return false & filter it out
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      })
    },
    handleComplete(id) {
      // find array method to look for specific item in array, if return true, store in p
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete;
    }
  },
}
</script>
