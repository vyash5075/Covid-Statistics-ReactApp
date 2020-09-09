import React ,{Component} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'; 
import Navbar from './components/Navbar/Navbar';
import Indiastats from './components/Indiastats/Indiastats';
import AboutUs from './components/Aboutus/Aboutus';
import CovidSymptoms from './components/Symptoms/Covidsymptoms';
import News from './components/News/news';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
class App extends Component {
  render(){
    
  return (
  
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
{/*       
    <Home/>
    <Indiastats/>
    <AboutUs/>
    <CovidSymptoms/>
    <News/> */}

<Route
       exact path="/"
        component={
          Home}

      />

<Route
       path="/india"
       component={
          Indiastats}

      />

      
<Route
       path="/aboutus"
       component={AboutUs}
      />

      
<Route
       path="/symptoms"
       component={CovidSymptoms}

      />

      
<Route
       path="/news"
       component={News}
      />
  <Redirect to='/' />
    </Switch>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}
}

export default App;
