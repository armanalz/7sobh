import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Layout from './components/hoc/Layout';
import Home from './components/Home';
import World from './components/World';
import Science from './components/Science';
import Political from './components/Political';
import Cultural from './components/Cultural';
import Sport from './components/Sport';
import Social from './components/Social';
import Economy from './components/Economy';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import SinglePost from './components/SinglePost';


const Routes=(props)=>{

   return(
     
        <Layout>
          <Switch>
               <Route exact component={Home} path="/"/>
               <Route exact component={World} path="/world"/>
               <Route exact component={Science} path="/science"/>
               <Route exact component={Political} path="/political"/>
               <Route exact component={Cultural} path="/cultural"/>
               <Route exact component={Sport} path="/sport"/>
               <Route exact component={Social} path="/social"/>
               <Route exact component={Economy} path="/economy"/>
               <Route exact component={Entertainment} path="/entertainment"/>
               <Route exact component={Health} path="/health"/>
               <Route exact component={SinglePost} path="/singlepost"/>
          </Switch>
        </Layout>
    
   )

}

export default Routes;
