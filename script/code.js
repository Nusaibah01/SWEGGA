//  calculation function



function calculateTotal() {
    let femaleQuantity = parseInt (document.getElementById("femaleQuantity").value)
    let maleQuantity = parseInt(document.getElementById("maleQuantity").value)
    
    const femalePrice = 150.95
    const malePrice = 180.95
    
    let femaleTotal = femaleQuantity * femalePrice
    let maleTotal = maleQuantity  * malePrice
    let totalPrice = femaleTotal + maleTotal
    
    //Display the total price for female and male jackets
    document.getElementById('femaleTotal').innerHTML = + femaleTotal;
    document.getElementById('maleTotal').innerHTML = " + maleTotal;

    // Display the total price for the order
    document.getElementById('totalPrice').innerHTML =  + orderTotalPrice;
}

    
    

}