import React from 'react'

export default function ToDoCard(props) {
    const { children, handleDeleteTodos, index, handleEditTodos} = props
    return (
        <li className='toDoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodos(index)
                }}>
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodos(index)
                }}>
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>)
}
