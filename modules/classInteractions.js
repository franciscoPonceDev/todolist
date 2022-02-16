/* eslint-disable import/prefer-default-export */
import { Store } from './classStore.js';

export class Interactions {
  static displayTasks() {
    const tasks = Store.getTasks();

    tasks.forEach((task) => Interactions.addTaskToList(task));
  }

  static addTaskToList(task) {
    const list = document.querySelector('#task-list');
    const row = document.createElement('tr');

    row.innerHTML = `
            <td><input class="checkbox" type="checkbox">${task.description}</td>
            <td class="remove-btn"><button class="delete">X</button></td>
        `;

    list.appendChild(row);
  }

  static deleteTask(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#description').value = '';
    document.querySelector('#author').value = '';
  }
}