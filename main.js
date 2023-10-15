let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header= document.querySelector('header');

window.addEventListener('scroll', () =>{
            header.classList.toggle('shadow',window.scrollY > 0);
});

const fade = () =>{
    const wrapper =
    document.querySelector('.wrapper');
    wrapper.classList.add('fade');

}
window.addEventListener('load',fade);

// function addtocart(){

// var imgpath=document.getElementById("box").getAttribute("src");
// var title=document.getElementById("title").innerText;
// var content=document.getElementById("content").innerText;


// var merge="IMAGE PATH =" +imgpath " IMAGE TITLE =" +title "IMAGE CONTENT ="+content;

// document.cookies="product_1="+merge+"; max-age="+60*60*24*10;
// }














// initapp();
// function addToCard(key){
//     if(listCards[key] == null)
//     listCards[key] = products[key];
//     listCards[key].quantity = 1;

// }
// reloadCard(){

// };

// function reloadCard(){
//     listCard.innerHTML = '';
//     Let count = 0;
//     let totalprice = 0;
//     listCards.forEach((value,key) => {
//         totalprice =totalprice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = 
//             <div><img scr = "image/${value,image}"/></div>;
//             <div>${vaalue,name}</div>;
//             <div>${vaalue,price.toLocalString()}</div>;
//             <div>${vaalue,quantity}</div>;
//             <div>
//                 <button onclick = "changeQuantity(${key}, ${value.quantity - 1}"> - </button>
//             <div class="count">${value.quantity}</div>
//             <button onclick = "changeQuantity(${key}, ${value.quantity + 1}"> + </button>
        
//             </div>
//             ;

//         }
//     })
//     totalprice.innerText = totalprice.toLocaleString();
//     quantity.innerText =count;
// }
