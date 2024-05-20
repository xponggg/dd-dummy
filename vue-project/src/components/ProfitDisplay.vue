<template>
    <h1 id = "Current"> Current Portfolio </h1>

        <table id="table" class = "auto-index">
            <tr>
                <th>S.No</th>
                <th>Coin</th>
                <th>Ticker</th>
                <th>Buy_Price</th>
                <th>Buy_Quantity</th>
                <th>Current_Price</th>
                <th>Profit</th>
                <th>Options</th>
            </tr>
        </table>
        <br><br>

        <h2 id = "totalProfit"> TP </h2>
</template>

<script>
</script>

<style>
h1,h2{
    text-align: center;
    background-color: rgb(194,202,188);
    font: 700;
    display:block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
table {
    border-collapse: collapse;
    text-align: center;
    width: 100%;
    font-family: arial, sans-serif;
}

th,td {
    border: 1px solid #dddddd;
    text-align: center;
    
}

button.bwt{
    color: white;
    background-color: rgb(255,94,0);
}

</style>