// var cart =[];

// function displaycart(a){
//     let j = 0;
//     if(cart.length==0){
//         document.getElementById('cartItem').innerHTML = "Your Cart is empty";
//     }
//     else{
//         document.getElementById('cartItem').innerHTML = cart.map((items) = >
//         {
//             var {image, title, price} = items;
//             return(
//                 <div class='cart-item'>
//                 <div class='row-img'>
//                     <img class='rowing' src=${image}>
//                 </div>
//                 <p style
//             )
//         }) 
//     }
// }


let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

cartIcon.onclick = () =>{
    cart.classList.add('active')
}
closeCart.onclick = () =>{
    cart.classList.add('active')
}


// cart working js

if(document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

// making function

function ready(){
    // remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButton)
    for (var i=0;i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click' ,removeCartItem)
    }
    // Quantity cahanges
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i= 0; i < quantityInputs.length;i++){
        var input =quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }
}


function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Quantity Changes
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){

    input.value = 1
    }
    updatetotal();
}



// Upadte Total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart=box')
    var total = 0;
    for (var i=0;i < CartBoxes.length; i++){
        var cartbox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$",""))
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;

    }
}

