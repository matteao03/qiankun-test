<template>
  <div>
    而那过去了的，就会成为亲切的怀恋。
    <div>
      <button @click="logout">退出</button>
    </div>
  </div>
</template>

<script>

export default {
    methods: {
        logout() {
            localStorage.clear()
            this.$root.parentRouter.push('/login')
        }
    }
}
</script>
