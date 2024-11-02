import { buyBook } from "./BookTypes";

const initialState = {
    NumberofBook: 40 // Ensure the casing matches everywhere
};

const BookReducer = (state = initialState, action) => {
    switch(action.type){
        case buyBook:
            return {
                ...state,
                NumberofBook: state.NumberofBook - 1
            };
        default:
            return state;
    }
};

export default BookReducer;
