/* exported todos */

// Define an interface to represent a todo item
interface Todo {
  // Define a unique identifier for each todo item
  todoId: string;
  // Define the task description for the todo item
  task: string;
  // Define a boolean to indicate if the todo is completed
  isCompleted: boolean;
}

// Declare an array of todos, initializing it with data from local storage
let todos: Todo[] = readTodos();

// Define a function to save the todos array to local storage
function writeTodos(): void {
  // Convert the todos array into a JSON string
  const todosJSON = JSON.stringify(todos);
  // Save the JSON string in local storage under the key 'todos-storage'
  localStorage.setItem('todos-storage', todosJSON);
}

// Define a function to read todos from local storage
function readTodos(): Todo[] {
  // Retrieve the JSON string from local storage with the key 'todos-storage'
  const todosJSON = localStorage.getItem('todos-storage');
  // Check if there is any JSON data in local storage
  if (todosJSON) {
    // Parse the JSON data and return it as an array of Todo objects
    return JSON.parse(todosJSON);
  }
  // If no JSON data is found, return an empty array
  return [];
}
