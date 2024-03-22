console.log("history")
const allSideMenu=document.querySelectorAll('.side__bar .side__menu li a');

allSideMenu.forEach(item=>{
    const li=item.parentElement

    item.addEventListener('click', function(){
        allSideMenu.forEach(i=>{
i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
})

const menubar=document.querySelector('.content nav .bx.bx-menu');
const sidebar=document.querySelector('.side__bar');
menubar.addEventListener('click',function(){
    // alert("what")
    sidebar.classList.toggle('hide');

    
})


if(window.innerWidth < 623){
    sidebar.classList.add('hide')
}