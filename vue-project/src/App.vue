<template>
<div id ="nav">
  <router-link to = "/"> Home </router-link> |
  <router-link to = "/about"> About </router-link> |
  <router-link to = "/profit"> Apps Display </router-link>
</div>
<router-view/>
</template>

<script>
export default{
  name: 'App'
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#nav{
  padding : 30px
}
#nav a {
  font-weight : bold;
  color: #2c3e50
}
#nav a.router-link-exact-active{
  color: #b756c0
}
</style>
