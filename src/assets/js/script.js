const swiper = new Swiper('.technology-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 120,

  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
    1200: {
      slidesPerView: 6,
    }

  }
});

const swiper2 = new Swiper('.examples-swiper', {
loop: true,
slidesPerView: 1,
spaceBetween: 66,
navigation: {
  nextEl: '.custom-swiper-button-next',
  prevEl: '.custom-swiper-button-prev',
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
breakpoints: {
  768: {
    slidesPerView: 2,
    spaceBetween: 66,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 66,
  }
}

});
const swiper3 = new Swiper('.sertification-swiper', {
loop: true,
slidesPerView: 1,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});
const swiper4 = new Swiper('.otzyv-swiper', {
loop: false,
slidesPerView: 1,
navigation: {
  nextEl: '.custom-swiper-button-next',
  prevEl: '.custom-swiper-button-prev',
},

});
// desctop menu
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.menu')

function openMenu() {
openMenuBtn.addEventListener('click' , (e)=> {
  e.preventDefault();
  menu.classList.add('active-menu');
})
}
function closeMenu() {
closeMenuBtn.addEventListener('click' , ()=> {
  menu.classList.remove('active-menu');
})
}
openMenu();
closeMenu();
//burger menu
const openBurgerBtn = document.querySelector('.burger-open');
const closeBurgerBtn = document.querySelector('.close-burger');
const burgerWrapper = document.querySelector('.burger-menu');

function openBurgerMenu() {
openBurgerBtn.addEventListener('click' , ()=> {
  burgerWrapper.classList.add('active');
})
}
function closeBurgerMenu() {
closeBurgerBtn.addEventListener('click' , ()=> {
  burgerWrapper.classList.remove('active');
})
}
openBurgerMenu();
closeBurgerMenu();

//burger submenu
const dropdownlink = document.querySelector('.dropdown');
const dropdown2lvlLinks = document.querySelectorAll('.dropdown2lvl');
const mobileBack = document.querySelector('.mobileBack');
const mobileBack2lvl = document.querySelectorAll('.mobileBack2lvl');


function openBurgerSubmenu() {
dropdownlink.addEventListener('click' , ()=> {
  document.querySelector('.submenu').classList.toggle('active');
})
dropdown2lvlLinks.forEach(el => {
  el.addEventListener('click' , (e)=>{
    e.target.closest('li').querySelector('.submenu2lvl').classList.add('active');
  })
})
}

function goBackBurgerSubmenu(){
mobileBack.addEventListener('click' , ()=>{
  document.querySelector('.submenu').classList.remove('active')
})
mobileBack2lvl.forEach(el=> {
  el.addEventListener('click' , (e)=>{
    e.target.closest('.submenu2lvl').classList.remove('active')
  })
})
}
openBurgerSubmenu();
goBackBurgerSubmenu()

//modal

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-inner');
const darkOpenModalBtn = document.querySelectorAll('.dark-btn');
const borderedOpenModalBtn = document.querySelectorAll('.bordered-btn');
const coloredOpenModalBtn = document.querySelectorAll('.colored-btn');
const body = document.querySelector('body')

let openModalArr = [ ...borderedOpenModalBtn , ...darkOpenModalBtn , ...coloredOpenModalBtn];
function openModal() {
openModalArr?.forEach(el => {
  if(!el.classList.contains('link-btn')) {
    el.addEventListener('click' , (e)=> {
      e.preventDefault();
      overlay.classList.add('open');
      modal.classList.add('open-modal');
      body.style.overflow = "hidden";
    })
  }

})
}
function closeModal() {
closeModalBtn.addEventListener('click' , ()=> {
  modal.classList.remove('open-modal');
  overlay.classList.remove('open');
  body.style.overflow = "auto";
})
overlay.addEventListener('click' , ()=> {
  modal.classList.remove('open-modal');
  overlay.classList.remove('open');
  body.style.overflow = "auto";
})
}
openModal();
closeModal();
