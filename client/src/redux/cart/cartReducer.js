import cartActionType from "./cartActionType";

const initial ={
    cart: [],
    cartId: null,
    isLoading: false,
    errorMessage: ""
}

function cartReducer(state=initial, action){
    switch (action.type){
        case cartActionType.FETCHING_CART: return {
            ...state,
            isLoading: true
        }
        case cartActionType.SET_CART: return{
            ...state,
            isLoading: false,
            cart: action.payLoad.cart,
            cartId: action.payLoad.cartId
        }
        case cartActionType.FETCHING_ERROR: return{
            ...state,
            errorMessage: action.payLoad.errorMessage  
        }
        default: return state 
    }
}

export default cartReducer