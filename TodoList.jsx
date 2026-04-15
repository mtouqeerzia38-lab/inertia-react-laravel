import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, done: false }]);
            setInput('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h1>📝 Meri Todo List</h1>
            
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Kya karna hai?"
                    style={{ padding: '10px', width: '70%', fontSize: '16px' }}
                />
                <button 
                    onClick={addTodo}
                    style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}
                >
                    Add
                </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li 
                        key={todo.id}
                        style={{ 
                            padding: '10px',
                            marginBottom: '10px',
                            background: '#f0f0f0',
                            borderRadius: '5px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <span 
                            onClick={() => toggleTodo(todo.id)}
                            style={{ 
                                textDecoration: todo.done ? 'line-through' : 'none',
                                cursor: 'pointer',
                                flex: 1
                            }}
                        >
                            {todo.done ? '✅' : '⭕'} {todo.text}
                        </span>
                        <button 
                            onClick={() => deleteTodo(todo.id)}
                            style={{ 
                                background: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {todos.length === 0 && (
                <p style={{ textAlign: 'center', color: '#999' }}>
                    Abhi koi task nahi hai! 🎉
                </p>
            )}
        </div>
    );
}

export default TodoList;
