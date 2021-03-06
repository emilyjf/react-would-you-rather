import { _getUsers, _getQuestions } from '../api/_DATA'
import { setAuthedUser } from './authedUser'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const handleInitialData = () => {
    const getUsersAndQuestions = async () => {
        const [users, questions] = await Promise.all([
            _getUsers(),
            _getQuestions()
        ])
        return [users, questions]
    }

    return async (dispatch) => {
        const AUTHED_USER_ID = ''
        
        dispatch(showLoading())
        const [users, questions] = await getUsersAndQuestions()
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_USER_ID))
        dispatch(hideLoading())
    }
}