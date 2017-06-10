import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Doctor from "./Doctors/doctor.js";
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter, Route, Link, IndexRoute } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/doctorSurvey" component={Doctor} />
        </div>
   </BrowserRouter>,
  document.getElementById('root')
);
