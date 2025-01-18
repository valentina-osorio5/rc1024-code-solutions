/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
/* eslint-disable @typescript-eslint/no-empty-function -- Remove me */
import { useEffect, useState } from 'react';
import { PageTitle } from './PageTitle';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  /* Implement useEffect to fetch all todos. Hints are at the bottom of the file. */
  useEffect(() => {
    async function fetchToDos() {
      try {
        const res = await fetch(`/api/todos`);
        console.log(res);
        if (!res.ok) throw new Error(`fetch Error ${res.status}`);
        const data = await res.json();
        console.log(data);
        setTodos(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchToDos();
  }, []);

  /* Implement addTodo to add a new todo. Hints are at the bottom of the file. */
  async function addTodo(newTodo: UnsavedTodo) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    };
    try {
      const res = await fetch('/api/todos', req);
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      const todo = (await res.json()) as Todo;
      setTodos([...todos, todo]);
    } catch (e) {
      setError(e);
    }
  }

  /* Implement toggleCompleted to toggle the completed state of a todo. Hints are at the bottom of the file. */
  useEffect(() => {
    // Define an asynchronous function to fetch the list of todos
    async function fetchTodos() {
      try {
        // Send a GET request to fetch todos from the API endpoint
        const res = await fetch('/api/todos');
        // Check if the response status is not OK (status >= 200 and < 300); throw an error if not
        if (!res.ok) throw new Error(`fetch Error ${res.status}`);
        // Parse the JSON response body and cast it as an array of Todo objects
        const todos = (await res.json()) as Todo[];
        // Update the todos state with the fetched data
        setTodos(todos);
      } catch (e) {
        // If an error occurs during the fetch or JSON parsing, update the error state
        setError(e);
      } finally {
        // Regardless of success or error, set isLoading to false to indicate the loading is complete
        setIsLoading(false);
      }
    }
    // Invoke the fetchTodos function to load data when the component mounts
    fetchTodos();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  async function addTodo(newTodo: UnsavedTodo) {
    // Prepare the request options for the POST request
    const req = {
      method: 'POST', // HTTP method to create a new resource
      headers: { 'Content-Type': 'application/json' }, // Set the request content type to JSON
      body: JSON.stringify(newTodo), // Serialize the newTodo object to a JSON string
    };
    try {
      // Send the POST request to add a new todo to the server
      const res = await fetch('/api/todos', req);
      // Check if the response status is not OK; throw an error if so
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      // Parse the JSON response body and cast it as a Todo object
      const todo = (await res.json()) as Todo;
      // Add the new todo to the existing todos list using the setTodos state updater
      setTodos([...todos, todo]);
    } catch (e) {
      // If an error occurs during the fetch or JSON parsing, update the error state
      setError(e);
    }
  }

  async function toggleCompleted(todo: Todo) {
    // Toggle the isCompleted property of the given todo
    todo.isCompleted = !todo.isCompleted;
    // Prepare the request options for the PUT request
    const req = {
      method: 'PUT', // HTTP method to update an existing resource
      headers: { 'Content-Type': 'application/json' }, // Set the request content type to JSON
      body: JSON.stringify(todo), // Serialize the updated todo object to a JSON string
    };
    try {
      // Send the PUT request to update the todo's completion status on the server
      const res = await fetch(`/api/todos/${todo.todoId}`, req);
      // Check if the response status is not OK; throw an error if so
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      // Parse the JSON response body and cast it as an updated Todo object
      const updated = (await res.json()) as Todo;
      // Update the todos list by replacing the modified todo with the updated version
      const allTodos = todos.map((original) =>
        original.todoId === updated.todoId ? updated : original
      );
      // Update the todos state with the new list
      setTodos(allTodos);
    } catch (e) {
      // If an error occurs during the fetch or JSON parsing, update the error state
      setError(e);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('fetch error:', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="flex">
        <div className="px-4">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}

// ----------- HINTS!!!!!!!!! ------------
/* useEffect:
 *  Use fetch to send a GET request to `/api/todos`.
 *  Once the response JSON is received and parsed,
 *  update state with the received todos.
 *  Remember to use type assertion when retrieving the JSON from the response.
 *  Handle errors correctly and set `error` to any error or error status code.
 *  Set `isLoading` to false when all network activity is finished.
 */

/* addTodo:
 *  Use fetch to send a POST request to `/api/todos`.
 *  Once the response JSON is received and parsed,
 *    - set the Todos to a _new_ array with the added Todo concatenated
 *    - handle errors appropriately (as mentioned above)
 *  Remember to use type assertion when retrieving the JSON from the response.
 *
 *  DO NOT MUTATE the original state array, nor any objects within it.
 *  Reminder: A React component will re-render if one of its state setters
 *  is called, but only if the new value is different than the old value.
 *  With arrays and objects, the new value will be different _only if_ a
 *  new array or object instance is created. That is why mutating the original
 *  state array _will not_ trigger a re-render.
 *  See https://react.dev/learn/updating-arrays-in-state for more info.
 *
 *  TIP: When calling fetch, be sure to SERIALIZE the todo object in the body
 *       with JSON.stringify() and specify the "Content-Type" header as "application/json"
 *  TIP: Use Array.prototype.concat to create a new array containing the contents
 *       of the old array, plus the object returned by the server.
 *       Alternatively, use the spread operator: `[...oldArray, addedItem]`
 */

/* toggleCompleted:
 *  Toggle the todo's "isCompleted" status.
 *  Use fetch to send a PUT request to `/api/todos/${todoId}` with the modified `todo`
 *  in the body.
 *  Once the response JSON is received and parsed,
 *    - create a shallow copy of the todos array from state
 *    - replace the old todo with the todo received from the server
 *    - handle errors appropriately (as mentioned above)
 *  Remember to use type assertion when retrieving the JSON from the response.
 *
 *  NOTE: "toggle" means to flip back and forth, so clicking a todo
 *  in the list repeatedly should "toggle" its isCompleted status back and forth.
 *
 *  DO NOT MUTATE the original state array, nor any objects within it. See above.
 *
 *  TIP: When calling fetch, be sure to SERIALIZE the todo object in the body
 *       with JSON.stringify() and specify the "Content-Type" header as "application/json"
 *  TIP: `Array.map` is a convenient way to make a copy of an array -- compare
 *       the Todo IDs and return the existing Todo if it is not the one that was
 *       just updated, and return the updated array if it is.
 */
