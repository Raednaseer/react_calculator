//counterTypes
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//Action
export const increment = () => ({ type : INCREMENT})
export const decrement = () => ({ type : DECREMENT})

//Reducer
const initialState = {
    count : 0,
    countt : 50,
}

export default function CounterReducer(state=initialState,action){
    switch(action.type){
        case INCREMENT:
            return {count: state.count+1,countt:state.countt-1}
        case DECREMENT:
            return {count: state.count-1,countt:state.countt+1}
        default:
            return state
    }
}