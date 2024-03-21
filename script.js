console.log("history")
const heroform=document.querySelector(".hero__form");
const loginlink=document.querySelector(".login__link");
const registerlink=document.querySelector(".register__link");
const btnlogin=document.querySelector(".btn__login");
const iconclose=document.querySelector(".icon__close");

registerlink.addEventListener('click',()=>{
    heroform.classList.add('active');
})

loginlink.addEventListener('click',()=>{
    heroform.classList.remove('active');
})

btnlogin.addEventListener('click',()=>{
    heroform.classList.add('active-login');
})

iconclose.addEventListener('click',()=>{
    heroform.classList.remove('active-login');
})

