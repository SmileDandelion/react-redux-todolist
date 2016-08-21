export default function reducer(state = {todos: []}, action) {
    switch (action.type) {
        case 'ADD':
            return {todos: [...state.todos, {text: action.text, isDone: false}]};
            break;
        case 'TOGGLE':
            state.todos[action.index].isDone = !state.todos[action.index].isDone;
            return {todos: [...state.todos]};
            break;
        case 'DELETE':
            state.todos.splice(action.index, 1);
            return {todos: [...state.todos]};
            break;
    }
    return state;
}