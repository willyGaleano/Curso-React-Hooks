const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

//Siempre se regresa un state
//La funcion no puede ser asincrona

const todoReducer = ( state = initialState, action ) => {

    //procesamos el action

    //si action tienen algun tipo entonces que compare (?)
    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

console.log(todos);


const newTodo = [{
    id: 2,
    todo: 'Comprar leche',
    done: false
}];

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};

//La accion nunca se mandara directamente como parametro
todos = todoReducer(todos, agregarTodoAction);

console.log(todos);