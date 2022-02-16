import { Task } from './classTask.js';
import { Store } from './classStore.js';
import { Interactions } from './classInteractions.js';

// Display Task Event
export const displayTaskEvent = document.addEventListener('DOMContentLoaded', Interactions.displayTasks);

// Add Boook Event

export const addTaskEvent = document.querySelector('#task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('#description').value;
  const task = new Task(description);

  Interactions.addTaskToList(task);
  Store.addTask(task);
  Interactions.clearFields();
});

export const removeTaskEvent = document.querySelector('#task-list').addEventListener('click', (e) => {
  // Remove task from Interactions
  Interactions.deleteTask(e.target);

  // Remove task from store
  Store.removeTask(e.target.parentElement.previousElementSibling.textContent);
});
