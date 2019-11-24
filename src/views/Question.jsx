import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


class QuestionPage extends Component {
  render() {
    const { question, author } = this.props;
    const { name, avatarURL } = author
    const { optionOne, id } = question

    return (

      <div className="content">
        <Grid fluid>
          <Row>


            <div>


              <br />
              <br />

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
                        <small>{this.props.userName}</small>
                      </h4>
                    </a>
                  </div>
                  <p className="wouldyourather text-center">Would You Rather?</p>
                  <p className="description text-center">{optionOne.text + "....."}</p>
                  <Link to={`/user/questions/${id}`}>
                    <Button bsStyle="info" fill style={{ width: "400px", height: "50px" }}>
                      View Question
                    </Button>
                  </Link>

                </div>

                <hr />
              </div>
            </div>
          </Row>
        </Grid>
      </div>
     
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id]
  return {
    question: question,
    author: users[question.author]
  }
}



export default connect(mapStateToProps)(QuestionPage);
