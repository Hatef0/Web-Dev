const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') {
    return;
  }

  createTodo(taskText);
  input.value = '';
});

function createTodo(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const leftDiv = document.createElement('div');
  leftDiv.className = 'todo-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;
  span.className = 'todo-text';

  checkbox.addEventListener('change', function () {
    li.classList.toggle('done');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', function () {
    todoList.removeChild(li);
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}