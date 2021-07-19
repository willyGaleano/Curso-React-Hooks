import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import "./style.css";

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender react',
//     done: false
// }];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  /*
        reducer: la funcion reducer
        initialState: estado inicial
        init: funcion para inicializar el state

        dispatch: para disparar las acciones hacia mi reducer

    */
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  //console.log(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const actionDelete = {
      type: "delete",
      payload: todoId,
    };

    dispatch(actionDelete);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            <TodoList
              todos={todos}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          </ul>
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
