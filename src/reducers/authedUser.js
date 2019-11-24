import { LOGGEDIN_USER, LOGGEDOUT_USER } from '../actions/authedUser';

export default function authedUser(state = null, action) {
	switch (action.type) {

		case LOGGEDIN_USER:
			return action.id;

		case LOGGEDOUT_USER:
			return null;

		default:
			return state;
	}
}
