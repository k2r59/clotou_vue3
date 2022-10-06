<template>
  <div id="app">
  <router-view />
  </div>
</template>

<script>
import CodeInput from './components/CodeInput.vue';
import WinPage from './components/WinPage.vue';

export default {
  name: 'App',
  components: {
    CodeInput,
    WinPage
  }
}
</script>
