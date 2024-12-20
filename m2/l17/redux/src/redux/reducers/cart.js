export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = []

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
        return [...state, action.payload]

        case REMOVE_FROM_CART:
            return state.filter(p => p.id !== action.payload)

        default:
            return state
    }
}

export default cartReducer