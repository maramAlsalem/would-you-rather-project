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
import { Button  } from "react-bootstrap";


export class QuestionCard extends Component {
  render() {
    return (
        <div>
       
       
        <br />
        <br />

      <div className="card card-user">
        
        <div className="content">
          <div className="author">
            <a href="#pablo">
              <img
                className="avatar border-gray"
                src={this.props.avatar}
                alt="..."
              />
              <h4 className="title">
                {this.props.name}
                <br />
                <small>{this.props.userName}</small>
              </h4>
            </a>
          </div>
          <p className="wouldyourather text-center">Would You Rather?</p>
          <p className="description text-center">{this.props.description}</p>

          <Button  bsStyle="info" fill  style={{width:"400px", height:"50px"}}>
                        View Question
            </Button>
                      
                </div>
        
        <hr />
      </div>
      </div>
    );
  }
}

export default QuestionCard;
