import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/qustions';

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			};

            case SAVE_QUESTION_ANSWER:
                const {authedUser,qid, answer } = action.answerData;
                return {
                  ...state,
                  [qid]: {
                    ...state[qid],
                    [answer]: {
                      ...state[qid][answer],
                      votes: state[qid][answer].votes.concat([authedUser])
                    }
                  }
                };

		default:
			return state;
	}
}

