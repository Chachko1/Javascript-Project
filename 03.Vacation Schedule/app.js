const baseUrl='http://localhost:3030/jsonstore/tasks';
const loadVacationsButton=document.getElementById('load-vacations');
const vacationList=document.getElementById('list');
const nameElement=document.getElementById('name');
const numDaysElement=document.getElementById('num-days');
const FromDateElement=document.getElementById('from-date');
const addButtonElement=document.getElementById('add-vacation');
const editButtonElement=document.getElementById('edit-vacation');


loadVacationsButton.addEventListener('click',(e)=>{
    fetch(baseUrl)
    .then(res=> res.json())
    .then(result=>{
       renderVacations(Object.values(result))
    })
})

addButtonElement.addEventListener('click', (e)=>{
    e.preventDefault;

    const newVacation={
        name: nameElement.value,
        days: numDaysElement.value,
        date: FromDateElement.value
    }

    fetch(baseUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVacation)
    })
    .then(res=>)

})
function loadVacations(){
    
}


function renderVacations(vacations){
    vacations
    .map(renderVacation)
    .forEach(vacationElement => vacationList.appendChild(vacationElement))
}

function renderVacation(vacation){
    const container=document.createElement('div');
    container.className='container';

    const h2Element=document.createElement('h2');
    h2Element.textContent=vacation.name;

    const h3DateElement=document.createElement('h3');
    h3DateElement.textContent=vacation.date;

    const h3DaysElement=document.createElement('h3');
    h3DaysElement.textContent=vacation.days;

    const changeButton=document.createElement('button');
    changeButton.className='change-btn';
    changeButton.textContent='Change';

    const doneButton=document.createElement('button');
    changeButton.className='done-btn';
    changeButton.textContent='Done';

    container.appendChild(h2Element);
    container.appendChild(h3DateElement);
    container.appendChild(h3DaysElement);
    container.appendChild(changeButton);
    container.appendChild(doneButton);

    return container;


}