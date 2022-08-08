window.addEventListener('load', () => {

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const taskContainer = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = input.value

    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('task');
    const newContentContainer = document.createElement('div');
    newContentContainer.classList.add('content');

    newTaskContainer.appendChild(newContentContainer);

    const newInputContainer = document.createElement('input');
    
    newInputContainer.classList.add('text');
    newInputContainer.type = "text";
    newInputContainer.setAttribute('readonly', 'readonly');

    newInputContainer.value = newTask;

    newContentContainer.appendChild(newInputContainer);
    

    const taskActions = document.createElement('div');
    taskActions.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText='Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText='Delete';


    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    newTaskContainer.appendChild(taskActions);

    taskContainer.appendChild(newTaskContainer);

    input.value = '';

    editButton.addEventListener('click', (e) => {

        if(editButton.innerHTML.toLowerCase() == 'edit'){
            editButton.innerText = 'save';

        
        newInputContainer.removeAttribute('readonly');
        newInputContainer.focus();


        }else{
            editButton.innerText = 'Edit';
            newInputContainer.setAttribute('readonly', 'readonly');
        }
        
        deleteButton.addEventListener('click', (e) => {
            taskContainer.removeChild(newTaskContainer);
        });

    });

    });

});