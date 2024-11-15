let todosContainer = document.getElementById("todosContainer");
let addBtn=document.getElementById("addBtn");

let todoList=[
    {
        text:"Learn HTML",
        uniqueNo:1
    },
    {
        text:"Learn CSS",
        uniqueNo:2
    },
    {
        text:"Learn JavaScript",
        uniqueNo:3
    }
]

let todoCount=todoList.length;
/* used for strike the completed todo items*/
function todoStatusChange(checkboxId,labelId) {
    let checkboxElement=document.getElementById(checkboxId);
    let labelElement=document.getElementById(labelId);

    labelElement.classList.toggle("checked");
}
/* used for deleting the todoitem*/
function deleteTodo(todoId) {
    let todoItem=document.getElementById(todoId);

    todosContainer.removeChild(todoItem);
}



function addTodoItem(todo) {
    let checkboxId="checkbox"+todo.uniqueNo;
    let todoId="todo"+todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;

    let todoItem = document.createElement('li');
    todoItem.classList.add("todo-item", "d-flex", "flex-row");
    todoItem.id=todoId;
    todosContainer.appendChild(todoItem);

    let checkboxElement = document.createElement('input');
    checkboxElement.id=checkboxId;
    checkboxElement.type="checkbox";
    checkboxElement.classList.add("checkbox");
    todoItem.appendChild(checkboxElement);

    let labelContainer=document.createElement('div');
    labelContainer.classList.add("label-container","ml-4");
    todoItem.appendChild(labelContainer);

    let labelElement=document.createElement('label');
    labelElement.classList.add("label");
    labelElement.setAttribute("for","inputCheckbox");
    labelElement.textContent=todo.text;
    labelElement.id=labelId;
    labelContainer.appendChild(labelElement);

    let deleteBtn=document.createElement('button');
    deleteBtn.classList.add("btn","btn-danger","ml-auto");
    deleteBtn.textContent="delete";
    labelContainer.appendChild(deleteBtn);

    checkboxElement.onclick=function() {
        todoStatusChange(checkboxId,labelId);
    }

    deleteBtn.onclick=function() {
        deleteTodo(todoId);
    }
/* used for adding new todo item*/
    function onAddTodo() {
        let userInputElement=document.getElementById("userInput");
        let userInputValue=userInputElement.value;

        if(userInputValue==="" || userInputValue===" ") {
            alert("Please enter valid Input");
            return;
        }

        todoCount=todoCount+1;
        let newTodo={
            text:userInputValue,
            uniqueNo:todoCount
        }
        addTodoItem(newTodo);
        userInputElement.value=""
    }
    addBtn.onclick=function() {
        onAddTodo();
    }

}
for(let todo of todoList) {
    addTodoItem(todo);
}