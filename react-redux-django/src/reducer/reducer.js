import { GET_USERS, DELETE_USER, UPDATE_USER, ADD_USER, GET_SINGLE_USER } from '../actions/types';

const initialState = {
    users: [],
    user: {},
    loading: true
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

            case DELETE_USER:
                return {
                    ...state,
                    loading: false
                }
                
            case ADD_USER:
                return {
                    ...state,
                    loading: false
                }
        
            case UPDATE_USER:
                return {
                    ...state,
                    loading: false
                }
            
            case GET_SINGLE_USER:
                return {
                    ...state,
                    user: action.payload,
                    loading: false
                }
            
        default:
            return state;
    }
}

export default usersReducers