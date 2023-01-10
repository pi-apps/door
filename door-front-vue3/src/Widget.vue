<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

// get data 
// import { useStore } from 'vuex'
import { useCounterStore } from './stores/counter'
import { useStatisticsStore } from './stores/statistics'
import { useSysStore } from './stores/sys'
import { ref, computed } from 'vue';



const store = useStatisticsStore()
const sysStore = useSysStore()
store.metrics_list();
store.get_payment8day();
// store.dispatch('statistics/metrics_list');
// store.dispatch('statistics/get_payment8day');

// const collapse1 = computed(() => { return sysStore.collapse1 });
// const collapse1 = sysStore.collapse1;
const dropdown1 = ref(false);
const dropdown2 = ref(false);

</script>

<template>

  <RouterView />

</template>

<style scoped>
.bg-purple {
  background-color: #8E24AA;
}


.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

/*header {
  line-height: 1.5;
  max-height: 100vh;
}*/

/*.logo {
  display: block;
  margin: 0 auto 2rem;
}

   {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
