<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"/>
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import SingleProject from '../components/SingleProject.vue';
import FilterNav from '../components/FilterNav.vue';

export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: 'all'
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
  computed : {
    filteredProjects() {
      if (this.current === 'completed')
        return this.projects.filter(project => project.complete);
      if (this.current === 'ongoing')
        return this.projects.filter(project => !project.complete);
      return this.projects;
    }
  }
}
</script>
