export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const initialState = 0

const countReducer = (state = initialState, action) => {

    switch(action.type) {
        case INCREMENT:
            return {
                count: state + action.payload
            }
        case DECREMENT:
            return {
                count: state - action.payload
            }
        default:
            return state
    }

}

export default countReducer