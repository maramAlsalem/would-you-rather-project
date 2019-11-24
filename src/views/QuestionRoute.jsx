import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UnswerdQuestion from './UnswerdQuestion';
import AnswerdQuestion from './AnswerdQuestion';

class QuestionRoute extends Component {
	render() {
		const { authedUserAnsweres, match } = this.props;
		const id = match.params.id;
		const answered = authedUserAnsweres.hasOwnProperty(id) ? true : false;

		return (
			<Fragment>
				<h2 className="text-center my-3">
				</h2>
                {
                answered ? 
                <AnswerdQuestion id={id} /> :
                 <UnswerdQuestion id={id} />
                 }
			</Fragment>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	const authedUserAnsweres = users[authedUser].answers;

	return {
		authedUserAnsweres
	};
}

export default connect(mapStateToProps)(QuestionRoute);
