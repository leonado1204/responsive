import actionPack from '../actions/actions';

const actions = actionPack.user;

const actionCreators = {
    getUsers (payload) {
        return {
            type : actions.GET_USER_LIST,
            payload : payload
        };
    },
};

export default actionCreators;