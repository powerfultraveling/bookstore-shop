import userActionType from "./userActionType"

const initial ={
    user: null,
    isLoading: false,
    errorMessage: ""
}

function userReducer(state=initial, action){
    switch (action.type){
        case userActionType.FETCHING_USER: return {
            ...state,
            isLoading: true
        }
        case userActionType.SET_USER: return{
            ...state,
            isLoading: false,
            user: action.payLoad.user,
        }
        case userActionType.FETCHING_ERROR: return{
            ...state,
            errorMessage: action.payLoad.errorMessage  
        }
        default: return state 
    }
}

export default userReducer