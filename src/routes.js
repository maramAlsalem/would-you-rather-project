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
import Dashboard from "views/Dashboard.jsx";
import Leaderboard from "views/Leaderboard.jsx";
import NewQuestion from "views/NewQuestion.jsx";
import QuestionRoutePage from "views/QuestionRoute";





const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/user"
  },


  {
    path: "/questions/:id",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: QuestionRoutePage,
    layout: "/user"

  },

 


  {
    path: "/newQusetion",
    name: "New Qusetion",
    icon: "pe-7s-credit",
    component: NewQuestion,
    layout: "/user"
  },

  {
    path: "/leaderboard",
    name: "Leaderboard",
    icon: "pe-7s-display2",
    component: Leaderboard,
    layout: "/user"
  },


 
];

export default dashboardRoutes;
