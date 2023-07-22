import React, { useState} from 'react'
import data from './todo/datasource/data.json'
import { ITodoListItems } from './index.types'
import { HiTrash } from 'react-icons/hi'


const Todo:React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todoList, setTodoList] = useState<ITodoListItems[]>(data)


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    
    if (todo.trim() === '') {
      return; 
    }

    const updatedTodoList: ITodoListItems = {
      id: new Date().getTime(),
      content: todo,
      isChecked: false
    }

    setTodoList([...todoList, updatedTodoList])
    setTodo('')
  }

  const toggleCheck = (id: number) => {
    const updatedTodoList = todoList.map((todo) => {
      return (
        todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo
      )
    })
    setTodoList(updatedTodoList)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleDelete = (id: number) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(updatedTodoList)
  }

  const handleEdit = () => {
    //...
  }

  const handleUpdate = () => {
    //...
  }



  const renderedTodoList = todoList.map((todo)=> {
    return (
      <div key={todo.id} className="flex items-center justify-between w-full p-3 bg-rose-50 ">
        <span 
          onClick={() => toggleCheck(todo.id)}
          style={{ textDecoration: todo.isChecked ? 'line-through' : 'none' }}>{todo.content}</span>
        <button onClick={() => handleDelete(todo.id)} className='flex items-center justify-center w-24 h-full py-4 font-bold text-white bg-red-300 border border-gray-500 rounded-lg hover:text-red-600'><HiTrash className="text-3xl"/></button>
      </div>
    )
  })


  return (
    <div className='flex justify-center w-full h-screen py-10 bg-rose-50 '>
      <div className='container flex flex-col items-center justify-start py-10 bg-white border border-gray-500 rounded-lg shadow-lg'>
        <h1 className='mb-10 text-4xl text-cyan-400'>TODO-LIST</h1>
        {/* INPUT */}
        <form  onSubmit={handleSubmit} className='space-x-3'>
          <input 
            className='h-10 px-3 mb-3 border border-gray-500 rounded-lg w-96'
            value={todo}
            onChange={handleChange}
            type="text" placeholder="TODO-LIST를 적으세요"/>
          <button className='h-10 px-3 border border-gray-500 rounded-lg w-14 hover:bg-black hover:text-white'>입력</button>
        </form>
        {/* LIST */}
        <div className='flex flex-col items-center justify-center w-1/2 space-y-5 bg-cyan-100'>
          {renderedTodoList}
        </div>
      </div>
    </div>
  )
}

export default Todo