export const LOGGEDIN_USER = 'LOGGEDIN_USER';
export const LOGGEDOUT_USER = 'LOGGEDOUT_USER';

export function setAuthedUser(id) {
	return {
		type: LOGGEDIN_USER,
		id
	};
}

export function unsetAuthedUser(id) {
	return {
		type: LOGGEDOUT_USER
	};
}
