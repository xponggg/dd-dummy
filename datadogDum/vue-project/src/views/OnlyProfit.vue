<template>
    <h3> This is the profit display </h3>
    <ProfitDisplay/>
</template>

<script>
import ProfitDisplay from '../components/ProfitDisplay.vue'
export default{
    name: 'OnlyProfit',
    components:{
        ProfitDisplay
    }
}
</script>