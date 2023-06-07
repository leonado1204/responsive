import initialState from '../initialState';
import actionPack from '../actions/actions';
const actions = actionPack.user;

export default function userReducer(state=initialState.user, action) {
    switch (action.type) {
        case actions.GET_USER_LIST:
            return {
                ...state,
                users: action.payload
            };
      default:
            return state;
    }
  }