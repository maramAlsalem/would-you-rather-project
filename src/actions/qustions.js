import { saveQuestion, saveQuestionAnswer } from 'utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';



function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}



function addAnswer({ qid, answer, authedUser }) {
	return {
		type: SAVE_QUESTION_ANSWER,
		answerData: {
			authedUser,
			qid,
			answer
			
		}
	};
}

export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());
		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		})
            .then((question) => 
            dispatch(addQuestion(question)))
            .then(() => 
            dispatch(hideLoading()));
	};
}


export function handleAnswer (qid, answer) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      
      dispatch(showLoading());
      return saveQuestionAnswer({
		authedUser,
		qid,
        answer
      })
          .then(() => 
              dispatch(addAnswer({
				 authedUser,
				qid,
				 answer,
			  })))
              .then (() => dispatch(hideLoading()));
          
    };
}

