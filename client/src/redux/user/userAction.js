import userActionType from "./userActionType"

export function fetchUser(){
    return{
        type: userActionType.FETCHING_USER
    }
}

export function setUser(user){
    return{
        type: userActionType.SET_USER,
        payLoad:{
          user:  user,
        }
    }
}

export function setUserError(error){
    return{
        type:userActionType.FETCHING_ERROR,
        payLoad:{
            errorMessage: error
        }
    }
}

