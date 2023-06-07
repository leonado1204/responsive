import actionPack from '../actions/actions';

const actions = actionPack.auth;

const actionCreators = {
    auth (payload) {
        return {
            type : actions.AUTH,
            payload : payload
        };
    },
    login (payload) {
        return {
            type : actions.LOGIN,
            payload : payload
        };
    },
    register (payload) {
        return {
            type : actions.REGISTER,
            value : payload
        };
    },
    logout (payload) {
        return {
            type : actions.LOGOUT,
            value : payload
        };
    }
};

export default actionCreators;