import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col

} from "react-bootstrap";
import { Button, FormGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { handleAnswer } from '../actions/qustions';




class QuestionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      option: '',

    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ option: value })
  }

  handleSubmit = (qid, event) => {


    const { dispatch } = this.props;

    if (this.state.option !== '') {
      dispatch(handleAnswer(qid, this.state.option));
    } 
    event.preventDefault();



  }


  render() {
    const { question, author } = this.props;
    const { name, avatarURL } = author
    const { optionOne, optionTwo, id } = question

    return (

      <Grid fluid>
        <Row>
          <Col md={4}>


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
                  <FormGroup className="text-center" check >
                    <label>
                      <input type="radio" name="option" value="optionOne" onChange={this.handleChange} /> {optionOne.text}
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                      <label>
                      <input type="radio" name="option" value="optionTwo" onChange={this.handleChange} /> {optionTwo.text}
                    </label>
                  </FormGroup>


                  <Link to="/user/dashboard">
                    <Button bsStyle="info" disabled={this.state.option === ''} fill onClick={(e) => this.handleSubmit(id, e)} style={{ width: "400px", height: "50px" }}>
                      Submit
                </Button>
                  </Link>

                </div>

                <hr />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>

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
