import React, { Component } from "react";
import { Grid, Row, Col, ProgressBar } from "react-bootstrap";
import { connect } from 'react-redux';


class Dashboard extends Component {


  render() {

    const { question, author, authedUser } = this.props;
    const { optionOne, optionTwo } = question;
    const { name, avatarURL } = author;
    const userVoteOne = optionOne.votes.includes(authedUser) ? "Your Answer" : null
    const userVoteTwo = optionTwo.votes.includes(authedUser) ? "Your Answer" : null
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOneTotalPercent = Math.round((optionOne.votes.length / totalVotes) * 100);
    const optionTwoTotalPercent = Math.round((optionTwo.votes.length / totalVotes) * 100);


    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}>
              <div className="card card-user">
                <div className="content">
                  <div className="author">
                    <a href="#pablo">
                      <img
                        className="avatar border-gray"
                        src={avatarURL}
                        alt="..."
                      />
                      <h4 className="title">
                        {name}
                        <br />
                        <small>{name}</small>
                      </h4>
                    </a>
                  </div>


                  <p className="wouldyourather text-center">Would You Rather?</p>


                  <div>
                    <p className="wouldyourather text-center">{optionOne.text}</p>  <span style={{ color: "red", textAlign: "center" }}>{userVoteOne}</span>
                    <br />
                    <small>{optionOne.votes.length + " out of "}{totalVotes}</small>
                    <ProgressBar variant="success" now={optionOneTotalPercent} label={optionOneTotalPercent + "%"} />

                    <p className="wouldyourather text-center">{optionTwo.text}</p><span className="ml-2" style={{ color: "red", textAlign: "" }}>{userVoteTwo}</span>
                    <br />
                    <small>{optionTwo.votes.length + " out of "}{totalVotes}</small>
                    <ProgressBar variant="info" now={optionTwoTotalPercent} label={optionTwoTotalPercent + "%"} />

                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];

  return {
    question: question,
    author: users[question.author],
    authedUser
  };
}

export default connect(mapStateToProps)(Dashboard);
