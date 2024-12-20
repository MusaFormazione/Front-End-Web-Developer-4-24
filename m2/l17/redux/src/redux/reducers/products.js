export const GET_PRODUCTS = 'GET_PRODUCTS';

const initialState = [];

const productsReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return action.payload
        default:
            return state
    }
}

export default productsReducer