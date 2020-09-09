import React from 'react';

const Bootstrapcard=props=>{
    return(
        <div style={{ marginTop:10,marginRight:10,marginLeft:20,marginBottom:20,width:280}}>
        <div   style={{ borderRadius:'12px',backgroundColor:"lightgrey"}} className="card text-center">
            <div className="overflow">
                <img style={{height:270,paddingTop:20,paddingRight:20,paddingLeft:20,width:280}} src={props.image} alt='Image1'/> 
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.content}</p>
                <a href={props.link} style={{borderRadius:'10px',backgroundColor:'blueviolet',width:'200px',backgroundColor:"lightskyblue"}} className="btn btn-success"> <h6>Go TO SITE</h6></a>
            </div>

        </div>
        </div>
    )
};
export default Bootstrapcard 