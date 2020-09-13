import React from "react";
import Symptoms from'./Symptoms';
import './symptoms.css';
import headache from '../../images/headache.jpg';
import fever from '../../images/feverr.jpg';
import cough from '../../images/cough.jpg';
import tasteloss from'../../images/tasteloss.jpg';
import runnynose from'../../images/runnynose2.jpg';
import chestpain from'../../images/chestpain.jpg';
import sorethroat from'../../images/sorethroat.jpg';

import stiffness from'../../images/stiffness.jpg';
import tiredness2 from'../../images/tiredness2.jpg';
const Covidsymptoms = () => {
    return (
        <>
        <p style={{fontSize:'34px',color:'brown'}} className="Symptomsheading">COVID-19 SYMPTOMS</p>
      <div className="Symptoms">
          <Symptoms fever={"Headache"} headache={headache}></Symptoms>
          <Symptoms fever={"Fever"}  headache={fever}></Symptoms>
          <Symptoms fever={"Cough"} headache={cough}></Symptoms>
          <Symptoms fever={"Stiffness"} headache={stiffness}></Symptoms>
          <Symptoms fever={"Tiredness"} headache={tiredness2}></Symptoms>
          <Symptoms fever={"Sore Throat"}headache={sorethroat}></Symptoms>
          <Symptoms fever={"Taste Loss"} headache={tasteloss}></Symptoms>
          <Symptoms fever={"Runny Nose"} headache={runnynose}></Symptoms>
          <Symptoms fever={"Chest Pain"} headache={chestpain}></Symptoms>
       
      </div>
      </>
    );
  };
  
  export default Covidsymptoms;