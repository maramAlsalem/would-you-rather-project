
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,

} from "react-bootstrap";
import { connect } from 'react-redux';
import { UserCard } from "components/UserCard/UserCard.jsx";

class Leaderboard extends Component {
  render() {

    return (
      <div className="content">
        <Grid fluid>
          {this.props.users.map((user) => (
            <Row>
              <Col md={4}>
                <UserCard
                  bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                  avatar={user.avatarURL}
                  name={user.name}
                  description={
                    <span>
                      Number of Question: {user.questions.length}
                      <br />
                      Number of Answers: {Object.keys(user.answers).length}
                      <br />
                      Score {user.questions.length + Object.keys(user.answers).length}
                    </span>
                  }

                />
              </Col>
            </Row>
          ))}

        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ users }) {

  const usersLeaderboard = Object.keys(users).sort((a, b) => {
    return (
      (Object.keys(users[b].answers).length + users[b].questions.length) -
      (Object.keys(users[a].answers).length + users[a].questions.length))
  });

  return {
    users: usersLeaderboard.map((id) => (users[id]))
  };
}

export default connect(mapStateToProps)(Leaderboard);
