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
import { NavItem, Nav } from "react-bootstrap";
import { connect } from 'react-redux';
import { unsetAuthedUser } from 'actions/authedUser';
import { Redirect } from 'react-router-dom';




class AdminNavbarLinks extends Component {

    constructor(props){
      super(props);
      this.state ={
        toLogin:false
      }

      this.handleLogout= this.handleLogout.bind(this);

    }
  


    handleLogout = (e) => {
    const { authenticate } = this.props;
    this.setState({
      toLogin:true
    })
    e.preventDefault();
    authenticate();
   
  }


  render() {

    const {user} = this.props
    if (this.state.toLogin === true) return <Redirect to="/login" />;

    return (
      <div>
      
        <Nav pullRight>
    <NavItem>Hello {user.name}</NavItem>
          <NavItem >
          <img
                className="avatarr"
                src={user.avatarURL}
                alt="..."
              />
            
            </NavItem>
       
         <NavItem  onClick={this.handleLogout}>
            Log out
          </NavItem>
           
        </Nav>
      </div>
    );
  }
}

function mapStateToProps({authedUser ,users}) {
  const user = users[authedUser]
	return {
		user	};
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: () => {
      dispatch(unsetAuthedUser())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminNavbarLinks);
