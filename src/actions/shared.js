import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from 'utils/api';
import { receiveUsers } from 'actions/users'
import { receiveQuestions } from 'actions/qustions'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions})=> {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
        });
    };
}