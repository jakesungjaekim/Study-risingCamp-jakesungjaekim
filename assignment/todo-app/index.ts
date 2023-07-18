const todoList = document.querySelector('.todo-list') as HTMLUListElement
const writeTodo = document.querySelector('#write-todo') as HTMLInputElement
const submitTodo = document.querySelector('#submit-todo') as HTMLButtonElement

if(submitTodo && todoList && writeTodo) {
  submitTodo.addEventListener('click', (event) => {
    event.preventDefault();

    const todoText = writeTodo.value.trim();

    if (todoText) {
      const todoItem = document.createElement('div');
      todoItem.textContent = todoText;
      
      todoItem.classList.add('flex', 'items-center', 'justify-between', 'p-2', 'mt-3', 'w-48', 'h-20')

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';

      deleteButton.classList.add('bg-red-500', 'text-white', 'p-2', 'rounded')
      
      deleteButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
        todoList.removeChild(deleteButton);
      })

      todoList.appendChild(todoItem);
      todoItem.appendChild(deleteButton);

      writeTodo.value = '';
    }
  })
}