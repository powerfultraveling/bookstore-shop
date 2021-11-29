import userActionType from "./userActionType"

export function fetchUser(){
    return{
        type:{
            FETCHING_USER: userActionType.FETCHING_USER
        }
    }
}

export function setUser(user){
    return{
        type:{
            SET_CART: userActionType.SET_USER,
        },
        payLoad:{
          user:  user,
        }
    }
}

export function setCartError(error){
    return{
        type:{
           FETCHING_ERROR: userActionType.FETCHING_ERROR
        },
        payLoad:{
            errorMessage: error
        }
    }
}
