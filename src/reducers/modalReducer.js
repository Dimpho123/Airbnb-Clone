const initialState = {openClose: "closed", content: ""};
 
export const modalReducer = (state = initialState, action) => {
    if(action.type === 'OPEN_MODAL') {
        return action.payload;
    }
    return state;
};