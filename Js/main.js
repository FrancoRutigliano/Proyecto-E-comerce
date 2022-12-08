const searchBar = document.querySelector('.search-box')
const btnCart = document.querySelector('.cart')
const btnUser = document.querySelector('.user')


document.querySelector('#search-icon').addEventListener('click', () => {
  
  searchBar.classList.toggle('active')
  btnCart.classList.remove('active')
  btnUser.classList.remove('active')

})


document.querySelector('#cart-icon').addEventListener('click', () => {
  
  btnCart.classList.toggle('active')
  searchBar.classList.remove('active')
  btnUser.classList.remove('active')

})

document.querySelector('#user-icon').addEventListener('click', () => {
  btnUser.classList.toggle('active')
  btnCart.classList.remove('active')
  searchBar.classList.remove('active')
})


// Scroleo de nav

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0)
})


var swiper = new Swiper(".new-arrival", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


