
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      nav1Close = document.getElementById('nav1-close'),
      nav2Close = document.getElementById('nav2-close'),
      nav3Close = document.getElementById('nav3-close'),
      nav4Close = document.getElementById('nav4-close'),
      nav5Close = document.getElementById('nav5-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })     
}
if(nav1Close){
    nav1Close.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })     
}
if(nav2Close){
    nav2Close.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })     
}
if(nav3Close){
    nav3Close.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })     
}
if(nav4Close){
    nav4Close.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })     
}
if(nav5Close){
    nav5Close.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })     
}








const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const AccordionItems = document.querySelectorAll('.questions_item')

AccordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.questions_header')

    accordionHeader.addEventListener('click',()=>{
        const openItem = document.querySelector('questions_open')
        toggleItem(item)

        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    })
})
const toggleItem = (item)=>{
    const accordionContent = item.querySelector('.questions_content')

        if(item.classList.contains('accordion-open')){
            accordionContent.removeAttribute('style')
            item.classList.remove('accordion-open')
        }else{
        accordionContent.style.height = accordionContent.scrollHeight + "px"
        item.classList.add('accordion-open')
        }
}


const sr = scrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay:400,
})

sr.reveal('home_data')
sr.reveal('home_img', {delay:500})
sr.reveal('home_social', {delay:600})
sr.reveal('about_img', {origin:'left'})
sr.reveal('about_data', {origin:'right'})
sr.reveal('steps_card, .product_card', {origin:'right'})