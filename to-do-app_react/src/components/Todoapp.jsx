import React, { useState } from 'react'

const Todoapp = () => {

    //! style start
    const innerStyle = {
        textAlign: "center",
        border: "1px solid black",
        width: "400px",
        height: "90vh",
        margin: "0 auto",
        backgroundColor: "orange"
    }

    const styleInput = {
        overflow: "hidden",
        padding: "10px 0",
        outline: "none",
        border: "none"
    }

    const styleAddBtn = {
        padding: "10px",
        cursor: "pointer",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        backgroundColor: "white",
        border: "none",
    }

    const styleList = {
        height: "70vh",
        visibility: "visible",
        overflowY: "scroll",
        listStyle: "none",
        textAlign: "center",
    }

    const styleListItem = {
        marginTop: "10px",
        overflow: "visible",
        textAlign: "start",
        display: "flex",
        justifyContent: "space-between"
    }

    //! style end


    const [list, setList] = useState([]);
    const [input, setInput] = useState("");


    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo,

        }


        setList([...list, newTodo]);
        setInput("");
    }

    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    }



    return (
        <div style={innerStyle}>
            <h1>Todo App</h1>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} style={styleInput} />

            <button onClick={() => addTodo(input)} style={styleAddBtn}>Add list</button>

            <ul style={styleList}>
                {list.map((todo) => (
                    <li style={styleListItem} key={todo.id}>
                        {todo.todo}
                        <button onClick={() => deleteTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Todoapp