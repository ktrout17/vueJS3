<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
// @ is an alias to /src

export default {
  name: 'Home',
  // runs before any lifecycle hooks
  setup() {
    const p = ref(null);

    let name = 'Kristin';
    let age = 25;

    const handleClick = () => {
      console.log('You clicked me.');
      p.value.classList.add('test');
      p.value.textContent = 'hello, ninjas';
    }

    return { name, age, handleClick, p }
  }
}
</script>
