import React, { Component } from 'react';
import  Bootstrapcard from './Bootstrapcard';

class Cards extends Component{
constructor(props){
    super(props)
    this.state={};
}
render(){
    return(
        
         <div  className="container-fluid d-flex justify-content-center">
            <div  className="row">
        {this.props.articles.map((items,i)=>{
                       return(                             
                <div className="col-md-4">
                    <Bootstrapcard image={items.urlToImage} title={items.title} content={items.content} link={items.url}/>
                </div>
                )} )
            }
               
            </div>
        </div>
    )
}
}
export default Cards;