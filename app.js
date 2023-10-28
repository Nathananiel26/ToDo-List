//adding the functionality of of adding task


//create variables for the input field, task button and the task container
const addTask = document.getElementById("add-task");
const taskContainer= document.getElementById('task-container');
const inputTask = document.getElementById('input-task')

// creating an event listener for addtask

addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li= document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li); 

// creating the check and delete button
    let checkButton = document.createElement('button');
    checkButton.innerHTML= '<i class="fa-solid fa-check"></i>'
    checkButton.classList.add('checkList');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML= '<i class="fa-solid fa-trash-can"></i>'
    deleteButton.classList.add('deleteList');
    task.appendChild(deleteButton);

    if(inputTask.value === ''){
        alert('please input task'); 
    } else{
        taskContainer.appendChild(task);
    }

    inputTask.value='';


    checkButton.addEventListener("click",function(){
        checkButton.parentElement.style.textDecoration='line-through';
    })

    deleteButton.addEventListener('click', function(e){
        let target= e.target
        target.parentElement.parentElement.remove();
    })
})


