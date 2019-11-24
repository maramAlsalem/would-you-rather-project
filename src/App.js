import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap-spinner';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import LeaderBoard from './views/Leaderboard';
import NewQuestion from './views/NewQuestion';
import Question from './views/Question';
import NotFoundPage from './views/NotFoundPage';
import AdminLayout from "./layouts/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import { handleInitialData } from './actions/shared';


class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}


	render() {
		const { authedUser, loadingBar } = this.props;

		if (loadingBar.default === 1 || loadingBar.default === undefined) {
			
			return (
				<div className="d-flex justify-content-center">
					<Spinner animation="border" role="status" variant="secondary" className="my-5">
						<span>Loading</span>
					</Spinner>
				</div>
			);
			
		} else {
			return (<BrowserRouter>
				<Fragment>
					{authedUser != null ? (<Switch>
						<Route path="/user" render={props => <AdminLayout {...props} />} />
						<Route path="/user/dashboard" component={Dashboard} />
						<Route path="/user/leaderboard" component={LeaderBoard} />
						<Route path="/user/newQusetion" component={NewQuestion} />
						<Route path="/user/questions/:id" component={Question} />
						<Redirect from="/" to="/user/dashboard" />
						<Route component={NotFoundPage} />
					</Switch>)
						: <Login />}
				</Fragment></BrowserRouter>)
		}
	}
}

function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);


