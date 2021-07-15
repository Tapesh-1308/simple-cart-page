var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discount_code1 = document.getElementById('discount_code1');
var error_trw = document.getElementById('error_trw');


const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    if(itemval.value <= 0){
        alert('items cannot be negative');
        itemval.value = 0;
    }
    else{
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = "#fff";
        itemval.style.color = "#000";
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    if(itemval.value >= 5){
        itemval.value = 5;
        alert('max quantity = 5');
        itemval.style.background = "#ff0000";
        itemval.style.color = "#fff";
        
    }
    else{
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const discount_code = () => {
    let totalcurramt = parseInt(total_cart_amt.innerHTML);
    if (discount_code1.value === 'TAP2020') {
        if (total_cart_amt.innerHTML >= 15) {
            let newtotalamt = totalcurramt - 15;
            total_cart_amt.innerHTML = newtotalamt;
            error_trw.innerHTML = "Hurray !! Code applied successfully";
        } else {
            error_trw.innerHTML = "Card Amount must be greater than 5$";
        }
        
    }
    else{
        error_trw.innerHTML = "Invalid Coupon!! Code is TAP2020";
    }
}