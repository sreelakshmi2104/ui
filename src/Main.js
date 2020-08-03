import React from 'react';
import Home from './pages/home/Home';
import LoginByGoogle from './pages/home/LoginByGoogle';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import red from '@material-ui/core/colors/red'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Dashboardvp from './pages/dashboard/Dashboardvp';
import CardAlign from './pages/card/CardAlign';
import AddMembers from './pages/add members/AddMembers';
import SignInSide from './pages/Sign-In/SignInSide';
import ECard from './pages/ecard/ECards';
import Announcement from './pages/announcement/Announcement';
import IndividualAwards from './pages/recognition/IndividualAwards';
import TeamAwards from './pages/recognition/TeamAwards';
import ClaimReward from './pages/claim reward/ClaimReward';
import Activity from './pages/activity/Activity';
import Members from './pages/Organisation/Members';
import SurveyPoll from './pages/Organisation/SurveyPoll';
import Poll from './pages/poll/Poll';
import AddTeam from './pages/add team/AddTeam';
import DashboardT from './pages/dashboard/DashboardT'
import Dashboard from './pages/dashboard/Dashboard';

import DashboardM from './pages/dashboard/DashboardM';
import DashboardRoutes from './pages/dashboard/DashboardRoutes';
import Awards from './pages/card/Awards'
function Main() {
    const theme= createMuiTheme({
      palette:{
        primary:{
          main:red[50],
          contrastText:'#fff',
        },
        secondary:{
          // main:'#E80018'
          main:'#b71c1c'

        }
    
      }
    })
   
    return (
      <MuiThemeProvider theme ={theme}>
      <Router>
      <div >
        <Route exact path="/" component={LoginByGoogle} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/login" component={SignInSide} />
        <Route exact path="/Dashboardvp" component={Dashboardvp}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        <Route  exact path="/DashboardM" component={DashboardM}/>
        <Route  exact path="/DashboardT" component={DashboardT}/>       
        <Route exact path="/cards" component={CardAlign}/>
        <Route exact path="/awards" component={Awards}/>
        <Route exact path="/addMembers" component={AddMembers}/>
        <Route exact path="/ecard" component={ECard}/>
        <Route exact path="/announcement" component={Announcement}/>
        <Route exact path="/individual" component={IndividualAwards}/>
        <Route exact path="/team" component={TeamAwards}/>
        <Route exact path="/claimReward" component={ClaimReward}/>
        <Route exact path="/activity" component={Activity}/>
        <Route exact path="/members" component={Members}/>
        <Route exact path="/surveypoll" component={SurveyPoll}/>
        <Route exact path="/poll" component={Poll}/>
        <Route exact path="/ecardsreceived" component={ECard}/>
        <Route exact path="/addTeam" component={AddTeam}/>
        
     
      </div> 
      </Router>
       
    </MuiThemeProvider>
  
    );
  }
  
  export default Main;
  