import React from "react";



const Symptoms = (props) => {
  return (
      <div className="spacing">
    <div className="Symptomscard">
       <h2 style={{textAlign:'center'}}>{props.fever}</h2>
      <img src={props.headache} alt="image" />
     
      <a href="#" target="_blank" rel="noopener noreferrer">
       Know More
      </a>
      
      </div>
    </div>
  );
};

export default Symptoms;