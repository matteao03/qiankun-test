<template>
  <div id="main">
    <div v-show="$route.path == '/login'" id="micro-login"></div>
    <router-view />
    <template v-if="$route.path !== '/login'">
      <layout v-show="isMicroApps" id="micro-apps" />
    </template>
  </div>
</template>

<script>
import Layout from '@/views/layout/index.vue'
export default {
    components: {
        Layout
    },
    computed: {
        isMicroApps() {
            return this.$route.path.startsWith('/layout')
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
