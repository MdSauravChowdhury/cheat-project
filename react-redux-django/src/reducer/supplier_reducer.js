import { GET_USERS, DELETE_USER, UPDATE_USER, ADD_USER, GET_SINGLE_USER } from '../actions/types';

const initialState = {
    suppliers: [],
    supplier: {},
    loading: true
}

const supplierReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                suppliers: action.payload,
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
                    supplier: action.payload,
                    loading: false
                }
            
        default:
            return state;
    }
}

export default supplierReducers