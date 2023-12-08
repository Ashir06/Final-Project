let todos = [];

function renderTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todo.text;

    const checkButton = document.createElement('button');
    checkButton.textContent = '</';
    checkButton.addEventListener('click', () => {
      todo.complete = !todo.complete;
      renderTodos();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
    });

    todoItem.appendChild(checkButton);
    todoItem.appendChild(deleteButton);

    if (todo.complete) {
      todoItem.style.textDecoration = 'line-through';
      todoItem.style.color = 'green';
    }

    todoList.appendChild(todoItem);
  });
}

function addTodo() {
  const todoText = document.getElementById('todo-input').value;
  todos.push({ text: todoText, complete: false });
  renderTodos();
  document.getElementById('todo-input').value = '';
}

document.getElementById('todo-form').addEventListener('submit', function (event) {
  event.preventDefault();
  addTodo();
});

renderTodos();
