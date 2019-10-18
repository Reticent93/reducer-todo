
export const initialState = {
    item: "Learn about reducers",
    completed: false,
    id: Date.now()
};


export function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_EDITING':
            
        return {
            ...state,
            editing: !state.editing
        };

        case 'UPDATE_TODO':
        return {
            ...state, 
            item: action.payload
        }
        default:
            return state
    }
}