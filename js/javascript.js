import data from "./data.js";


const calculateTotal = document.getElementById("calculateTotal")

calculateTotal.addEventListener('click', () => {
    let zebraQty = parseInt(document.getElementById('zebraQty').value)
    let lionQty = parseInt(document.getElementById('lionQty').value)
    let elephantQty = parseInt(document.getElementById('elephantQty').value)
    let giraffeQty = parseInt(document.getElementById('giraffeQty').value)

    let zebraCost = data.products[0].price
    let lionCost = data.products[1].price
    let elephantCost = data.products[2].price
    let giraffeCost = data.products[3].price

    let subtotal = document.getElementById('subtotal')
    let taxState = document.getElementById('state')
    let taxRate
    let taxTotal = document.getElementById('taxes')
    let total = document.getElementById('total')

    if (taxState.value == 'ca') {
        taxRate = data.taxes[0].value
    } else if (taxState.value == 'mn') {
        taxRate = data.taxes[1].value
    } else if (taxState.value == 'ny') {
        taxRate = data.taxes[2].value
    } else {
        taxRate = 0.05
    }

    subtotal.innerHTML = ((zebraQty * zebraCost) + (lionQty * lionCost) + (elephantQty * elephantCost) + (giraffeQty * giraffeCost)).toFixed(2)
    taxTotal.innerHTML = (Math.round((taxRate * subtotal.innerHTML) * 100) / 100).toFixed(2)
    total.innerHTML = (parseFloat(subtotal.innerHTML) + parseFloat(taxTotal.innerHTML)).toFixed(2)
})


