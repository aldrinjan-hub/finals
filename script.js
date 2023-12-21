document.addEventListener('DOMContentLoaded', function () {
  var todoItems = [];

  function addTodoItem(title, details) {
    var todoItem = document.createElement('div');
    todoItem.classList.add('col');
    todoItem.innerHTML = '<div class="card"><div class="card-body"><h5 class="card-title">' + title + '</h5><p class="card-text">' + details + '</p></div></div>';

    todoItems.push(todoItem);

    document.getElementById('todoContainer').appendChild(todoItem);
  }

  document.getElementById('btnAdd').addEventListener('click', function () {
    var title = document.getElementById('txtTitle').value;
    var details = document.getElementById('txtDetails').value;

    addTodoItem(title, details);

    document.getElementById('txtTitle').value = '';
    document.getElementById('txtDetails').value = '';
  });

  document.getElementById('btnFIFO').addEventListener('click', function () {
    if (todoItems.length > 0) {
      document.getElementById('doneContainer').appendChild(todoItems.shift());
    }
  });

  document.getElementById('btnFILO').addEventListener('click', function () {
    if (todoItems.length > 0) {
      document.getElementById('doneContainer').appendChild(todoItems.pop());
    }
  });

  document.getElementById('btnReset').addEventListener('click', function () {
    document.getElementById('todoContainer').innerHTML = '';
    document.getElementById('doneContainer').innerHTML = '';

    todoItems = [];
  });
});
