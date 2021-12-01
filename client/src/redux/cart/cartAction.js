import cartActionType from "./cartActionType";

export function fetchCart(){
    return{
        type:cartActionType.FETCHING_CART
    }
}

export function setCart(cart, cartId){
    return{
        type: cartActionType.SET_CART,
        payLoad:{
          cart:  cart,
          cartId: cartId 
        }
    }
}

export function setCartError(error){
    return{
        type:cartActionType.FETCHING_ERROR,
        payLoad:{
            errorMessage: error
        }
    }
}
