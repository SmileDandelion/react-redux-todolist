export default function reducer(state={todos:[]}, action) {
    switch (action.type){
        case 'ADD':
            console.log(state.todos)
            return {todos:[...state.todos,{text:action.text}]};
            break;
    }
    return state;
}