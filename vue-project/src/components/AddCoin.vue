<template>
    <div id = "container">
        <form id="myForm">
            <h2>Submit App</h2>

            <div class = "formli">
                <label for="coin1">App Name: </label>
                <input type="text" id="coin1" required="" placeholder="Enter Name"><br><br>
        
                <label for="ticker1">Department:</label>
                <input type="text" id="ticker1" required="" placeholder="DSG/IIG/TG"><br><br>
        
                <label for="buy1">Demands: </label>
                <input type="number" id="buy1" required="" placeholder="Features to Onboard"><br><br>
        
                <label for="quant1">OIC Name: </label>
                <input type="number" id="quant1" required="" placeholder="Enter OIC"><br><br>
                
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
    background-color: rgb(203, 184, 206);
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
