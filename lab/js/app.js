let navbar = document.querySelector('.navbar'); 

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    shoppingcart.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    navbar.classList.remove('active');

}

window.onscroll = () =>{
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider",{
    autoplay:{
        delay:7500,
        disableOnInteraction: false,

    },
    grabCursor: true,
    loop: true,
})