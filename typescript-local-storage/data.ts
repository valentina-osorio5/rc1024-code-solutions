/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

const $submitButton = document.querySelector('.btn');
if (!$clickbutton) throw new Error('$submitButton does not exist');
function handleSubmit(event) {
  console.log('submit button clicked');
  writeTodos();
}
$submitButton.addEventListener('click', handleSubmit);
