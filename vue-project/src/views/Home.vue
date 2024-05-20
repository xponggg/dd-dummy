<script>
import WelcomeCpp from '../components/WelcomeCpp.vue'
import AddCoin from '../components/AddCoin.vue'
import ProfitDisplay from '../components/ProfitDisplay.vue'
export default{
    name: 'App',
    components:{
        WelcomeCpp,
        AddCoin,
        ProfitDisplay
    },
    data(){
        return{
            refreshComp:0
        }
    },
    methods:{
        change(){
            this.refreshComp = this.refreshComp + 1
        }
    }

}
</script>
<template>
<WelcomeCpp/>
<AddCoin @added="change"/>
<ProfitDisplay :key = "refreshComp"/>
<img id= "bg" src = "../assets/cpp.png" alt = "" height = "200" width="10">
</template>
<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smooting: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

#bg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:60%;
}
</style>