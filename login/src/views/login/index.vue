<template>
  <div class="home">
   假如生活欺骗了你, 不要悲伤,不要心急
   <div>
    <button @click="login">登录</button>
   </div>
  </div>
</template>

<script>

export default {
    methods: {
        login() {
            localStorage.setItem('user', 'matteao');
            this.$root.parentRouter.push('/home')
        }
    }
}
</script>
