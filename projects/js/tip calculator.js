let txtCost = document.getElementById("txtCost");

function calculate(){
    let cost = Number(txtCost.value);
    let tip = cost * .2;
    let total = cost + tip;
    console.log("Tip: $" + tip + " Total: $" + total);
}