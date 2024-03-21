console.log("history")
const herocontent=document.querySelector(".hero__content");
const loginlink=document.querySelector(".login__link");
const registerlink=document.querySelector(".register__link");
const btnlogin=document.querySelector(".btn__login");


registerlink.addEventListener('click',()=>{
    herocontent.classList.add('active');
})

loginlink.addEventListener('click',()=>{
    herocontent.classList.remove('active');
})

btnlogin.addEventListener('click',()=>{
    herocontent.classList.add('active-login');
})

