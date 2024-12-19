const initialState = {
    main:{
        count: 0
    },
    shop : {
        cart: [],
        products: []
    }
}

const mainReducer = (state = initialState, action)=>{
    //action.payload = Valore inviato col dispaccio. 
    //action.type =  Il tipo di azione richiesta 
    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                main:{
                    ...state.main,
                    count: state.main.count + action.payload
                }
            }
        default:
            return state
    }

}

export default mainReducer