
export const initialState = {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
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
            title: action.payload
        }
        default:
            return state
    }
}