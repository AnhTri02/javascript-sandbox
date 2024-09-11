const todoList = [];

let todoListHTML = '';
renderToDo()
function renderToDo(){

  todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject
    todoListHTML += `
    <div> ${name}</div>
    <div> ${dueDate} </div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderToDo();
    "class="deleteButton">Delete</button>
    </p>`;
   }
   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addToDo(){
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;


 todoList.push({
  name, dueDate

 });
 console.log(todoList);

 inputElement.value = '';
 renderToDo();

}