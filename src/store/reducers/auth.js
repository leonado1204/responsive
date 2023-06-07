import initialState from '../initialState';
import actionPack from '../actions/actions';
const actions = actionPack.auth;
export default function authReducer(state=initialState.auth, action) {
    
    switch (action.type) {
        case actions.LOGIN:
            return {
                user: action.payload.data,
                isAuthenticated: true
            };
        case actions.LOGOUT:
            return {
                user: undefined,
                isAuthenticated: false
            };
      default:
            return state;
    }
  }