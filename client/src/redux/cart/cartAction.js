import cartActionType from "./cartActionType";

export function fetchCart(){
    return{
        type:{
            FETCHING_CART: cartActionType.FETCHING_CART
        }
    }
}

export function setCart(cart, cartId){
    return{
        type:{
            SET_CART: cartActionType.SET_CART,
        },
        payLoad:{
          cart:  cart,
          cartId: cartId 
        }
    }
}

export function setCartError(error){
    return{
        type:{
           FETCHING_ERROR: cartActionType.FETCHING_ERROR
        },
        payLoad:{
            errorMessage: error
        }
    }
}
