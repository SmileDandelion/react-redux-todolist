export default function reducer(state = {todos: [], filter: []}, action) {
    switch (action.type) {
        case 'ADD':
            state.todos.push({text: action.text, isDone: false});
            return {todos: [...state.todos], filter: state.todos};
            break;
        case 'TOGGLE':
            state.todos[action.index].isDone = !state.todos[action.index].isDone;
            return {todos: [...state.todos], filter: state.todos};
            break;
        case 'DELETE':
            state.todos.splice(action.index, 1);
            return {todos: [...state.todos], filter: state.todos};
            break;
        case 'FILTER':
            if (action.filterName === 'all') {
                state.filter = state.todos;
                return {todos: [...state.todos], filter: state.filter};
            } else if (action.filterName === 'active') {
                state.filter = state.todos.filter(todo=>!todo.isDone);
                return {todos: [...state.todos], filter: state.filter};
            } else if (action.filterName === 'complete') {
                state.filter = state.todos.filter(todo=>todo.isDone);
                return {todos: [...state.todos], filter: state.filter};
            }
    }
    return state;
}