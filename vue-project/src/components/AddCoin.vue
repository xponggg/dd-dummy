<template>
    <div id = "container">
        <form id="myForm">
            <h2>Add Coins</h2>

            <div class = "formli">
                <label for="coin1">Coin Name: </label>
                <input type="text" id="coin1" required="" placeholder="Enter Coin"><br><br>
        
                <label for="ticker1">Ticker:</label>
                <input type="text" id="ticker1" required="" placeholder="Valid Ticker"><br><br>
        
                <label for="buy1">Buy Price: </label>
                <input type="number" id="buy1" required="" placeholder="Buy Price"><br><br>
        
                <label for="quant1">Buy Quantity: </label>
                <input type="number" id="quant1" required="" placeholder="Quantity"><br><br>
                
                <div class = "save">
                <button id="savebutton" type="button"> Save </button><br><br>
                </div>
            </div>
            
        </form>
    </div>
</template>

<script>

</script>

<style scoped>
h2{
    background-color: rgb(194,202,188);
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
}

input:hover {
    box-shadow: 3px 3px purple;
    border-radius: 2px;
}

.save{
    text-align: center;
}

.formli{
    display: inline-block;
    text-align: right;
}
</style>
