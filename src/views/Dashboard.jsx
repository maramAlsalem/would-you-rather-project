/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from 'react-redux';
import QuestionPage from './Question';

class Dashboard extends Component {

  render() {


    return (
      <div className="content text-center">
        <Grid fluid>

          <Row>
            <Col md={8}>

              <Tabs className='center'>
                <TabList>
                  <Tab>Unanswerd Questions</Tab>
                  <Tab>Answerd Questions</Tab>
                </TabList>

                <TabPanel>
                  {this.props.unansweredQuestions.map((id) => (
                    <li key={id}>
                      <QuestionPage id={id} />
                    </li>))}
                </TabPanel>
                <TabPanel>
                  {this.props.answeredQuestions.map((id) => (
                    <li key={id}>
                      <QuestionPage id={id} />
                    </li>))}
                </TabPanel>


              </Tabs>
            </Col>

          </Row>


        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  
  const user = users[authedUser]

  const answeredQuestions = Object.keys(user.answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const  unansweredQuestions = Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    
  return {
    unansweredQuestions ,
    answeredQuestions
  }
}

export default connect(mapStateToProps)(Dashboard);
