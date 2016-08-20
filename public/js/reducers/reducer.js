export default function reducer(state = {todos: [], filter: []}, action) {
    switch (action.type) {
        case 'ADD':
            state.todos.push({text: action.text, isDone: false});
            state.filter = state.todos;
            return state;
        case 'TOGGLE':
            state.todos[action.index].isDone = !state.todos[action.index].isDone;
            return state;
        case 'DELETE':
            state.todos.splice(action.index, 1);
            return {todos: state.todos,filter:state.todos};
        case 'SET_FILTER':
            if (action.filterName === 'ALL') {
                state.filter = state.todos;
            } else if (action.filterName === 'ACTIVED') {
                state.filter = state.todos.filter(todo=>!todo.isDone);
            } else if (action.filterName === 'COMPLETED') {
                state.filter = state.todos.filter(todo=>todo.isDone);
            }
            return state;
    }
    return state;
}