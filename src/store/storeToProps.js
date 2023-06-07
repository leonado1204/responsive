import { bindActionCreators } from 'redux'
import authCreator from './actionCreators/auth'
import userCreator from './actionCreators/user'
const components = {
    AUTH            :   "AUTH",
    USER            :   "USER",
}
function mapStoreToProps(component) {
    switch (component) {
        case components.AUTH:
            return function (state) {
                return {
                    ...state.auth,
                }
            }
        case components.USER:
            return function (state) {
                return {
                    ...state.user,
                }
            }
        default:
            return undefined
    }
}
function mapDispatchToProps(component) {
    switch (component) {
        case components.AUTH:
            return function (dispatch) {
                return bindActionCreators({
                    ...authCreator
                }, dispatch)
            }
        case components.USER:
            return function (dispatch) {
                return bindActionCreators({
                    ...userCreator
                }, dispatch)
            }
        default:
            return undefined 
    }
}
export {
    mapStoreToProps,
    mapDispatchToProps,
    components
}
