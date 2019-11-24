import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  DropdownButton,
  MenuItem
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { connect } from 'react-redux';
import avatar from "assets/img/WOULD you rather.png";
import { Button } from "react-bootstrap";
import { setAuthedUser } from '../actions/authedUser';





class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { userId: 'Username' };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChangeUser(eventKey, event) {

    this.setState({ userId: eventKey });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { userId } = this.state;
    const { authenticate } = this.props;
    console.log(userId)
    if (userId) {
      authenticate(userId);
    } else {
      alert('Please select a user before.');
    }
  }


  render() {
    const { users } = this.props;
    return (
      <div className="content text-center" style={{
        position: "absolute",
        top: "30%",
        left: "30%",
        bottom: "30%",
        right: "30%",
        width: "100%",
      }}>
        <Grid fluid>
          <Row>
            <Col md={5}>
              <Card

                content={
                  <form className="text-center">
                    <div className="text-center pb-4">
                      <img
                        src={avatar}
                        className="rounded"
                        style={{ height: 60, cursor: 'pointer' }}
                        alt="logo" />
                    </div>
                    <br />

                    <DropdownButton title={this.state.userId} id={this.state.userId} onSelect={this.handleChangeUser} style={{ width: "400px", height: "50px" }}>
                      {users.map((user) => (<MenuItem className="text-center" value={user.userId} key={user.userId} eventKey={user.userId} style={{ width: "400px", height: "50px" }}>{user.userName}</MenuItem>))}
                    </DropdownButton>



                    <Col></Col>
                    <br />
                    <Col>
                      <Button bsStyle="info" disabled={this.state.userId === 'Username'} onClick={this.handleSubmit} fill type="submit" style={{ width: "400px", height: "50px" }}>
                        Login
                      </Button>
                    </Col>

                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((id) => ({
      userId: id,
      userName: users[id].name
    }))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: (id) => {
      dispatch(setAuthedUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
