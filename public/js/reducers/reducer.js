export default function reducer(state = {todos: []}, action) {
    switch (action.type) {
        case 'ADD':
            state.todos.push({text: action.text, isDone: false});
            return state;
        case 'TOGGLE':
            state.todos[action.index].isDone = !state.todos[action.index].isDone;
            return state;
        case 'DELETE':
            state.todos.splice(action.index, 1);
            console.log(state.todos);
            return {todos: state.todos};
    }
    return state;
}