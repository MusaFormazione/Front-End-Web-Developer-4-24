import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducers/cart"

export const addToCart = (product) => ({type: ADD_TO_CART, payload: product})
export const removeFromCart = (id) => ({type: REMOVE_FROM_CART, payload: id})


export const addToCartWithThunk = (product) => {

    return (dispatch, getState) =>{
        const currentState = getState();
        console.log(currentState);
        
        
        const isProductInCart = currentState.shop.cart.some(p => p.id === product.id)

        if(!isProductInCart){
            dispatch(addToCart(product))
        }else{
            alert('Prodotto già presente nel carrello')
        }

    }
}
