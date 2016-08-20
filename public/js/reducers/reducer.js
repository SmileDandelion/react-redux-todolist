export default function reducer(state = {todos: []}, action) {
    switch (action.type) {
        case 'ADD':
            state.todos.push({text: action.text});
            console.log(state)
            return state;
    }
    return state;
}