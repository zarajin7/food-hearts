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




document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-people-form');
    const peopleList = document.getElementById('people-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const person = { name, email };

        let people = getSavedPeople();
        people.push(person);
        savePeople(people);

        displayPeople(people);
    });

    function getSavedPeople() {
        const people = JSON.parse(localStorage.getItem('people')) || [];
        return people;
    }

    function savePeople(people) {
        localStorage.setItem('people', JSON.stringify(people));
    }

    function displayPeople(people) {
        peopleList.innerHTML = '';
        for (const person of people) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${person.name}</strong>: ${person.email}`;
            peopleList.appendChild(li);
        }
    }
    
});