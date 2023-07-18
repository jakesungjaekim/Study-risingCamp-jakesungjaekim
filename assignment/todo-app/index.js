var todoList = document.querySelector('.todo-list');
var writeTodo = document.querySelector('#write-todo');
var submitTodo = document.querySelector('#submit-todo');
if (submitTodo && todoList && writeTodo) {
    submitTodo.addEventListener('click', function (event) {
        event.preventDefault();
        var todoText = writeTodo.value.trim();
        if (todoText) {
            var todoItem_1 = document.createElement('div');
            todoItem_1.textContent = todoText;
            todoItem_1.classList.add('flex', 'items-center', 'justify-between', 'p-2', 'mt-3', 'w-48', 'h-20');
            var deleteButton_1 = document.createElement('button');
            deleteButton_1.textContent = 'Delete';
            deleteButton_1.classList.add('bg-red-500', 'text-white', 'p-2', 'rounded');
            deleteButton_1.addEventListener('click', function () {
                todoList.removeChild(todoItem_1);
                todoList.removeChild(deleteButton_1);
            });
            todoList.appendChild(todoItem_1);
            todoItem_1.appendChild(deleteButton_1);
            writeTodo.value = '';
        }
    });
}
