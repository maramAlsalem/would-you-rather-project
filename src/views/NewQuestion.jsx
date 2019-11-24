import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,

} from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { handleAddQuestion } from '../actions/qustions'
import avatar from "assets/img/WOULD you rather.png";

class NewQuestion extends Component {

  constructor(props){
    super(props);
    this.state = {
      optionOne: '',
      optionTwo: '',
      toHome: false,

    }
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {

  
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    
     this.setState(
			{
				optionOne: '',
				optionTwo: '',
				toHome: true
			},
			() => dispatch(handleAddQuestion(optionOne, optionTwo))
		);
    
  };
  render() {

    const { optionOne, optionTwo } = this.state;
    console.log(this.state.toHome)
    if(this.state.toHome === true) return  <Redirect to="/" />



    return (
      <div className="content">
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
                        alt="logo"

                      />
                    </div>

                    <input type="text" className="text-center" style={{ borderRadius: "20", borderStyle: "solid", borderColor: "gray", width: "400px", height: "50px" }} bsStyle="info" value={optionOne} name="optionOne" onChange={this.handleInputChange} placeholder="Option One"></input>
                    <p>OR</p>
                    <input type="text" bsStyle="info" className="text-center" style={{ borderRadius: "20", borderStyle: "solid", borderColor: "gray", width: "400px", height: "50px" }} value={optionTwo} name="optionTwo" onChange={this.handleInputChange} placeholder="Option Two"></input>


                    <br />
                    <br />


                    <Button bsStyle="info" disabled={optionOne && optionTwo === ''} onClick={this.handleSubmit} fill type="submit" style={{ width: "400px", height: "50px" }}>
                      Add Qustion
                    </Button>

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

export default connect()(NewQuestion);
