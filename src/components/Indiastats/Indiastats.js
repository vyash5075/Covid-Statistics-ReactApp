import React,{Component} from "react";
import '../Indiastats/india.css';

class Indiastats extends Component{
    constructor(props){
        super(props);
        this.state={
            states:[]
        }
    }

componentDidMount(){
  
    fetch('https://api.covid19india.org/data.json')
    .then( (response)=>{
        console.log("respo"+response);
        return response.json();
    })
    .then((data)=>{
        this.setState({
            states:data.statewise
        });
        console.log(data)
    });
}
    render(){
        console.log(this.state)
        console.log(this.state.states);
        return(
            <>
             <p style={{fontSize:'34px'}} className="indiastatsheading">India Statistics</p>
            <div className="my-12">
            <div className="table-responsive">
                <table class="table table-bordered table-striped text-center">
                    <tr>
                        <th><h3>State</h3></th>
                        <th><h3>StateCode </h3></th>
                        <th><h3> Confirmed </h3></th>
                        <th><h3>Total Active Cases</h3></th>
                        <th><h3>Total Recovered </h3></th>
                        <th><h3>Total Deaths </h3></th>     
                    </tr>
                    {this.state.states.map((items,i)=>{
                       return(                             
                        <tr>
                        <th  style={{fontWeight:'bold',color:'#bf8040',backgroundColor:' #ffff66'}}>{items.state}</th>
                        <th style={{fontWeight:'bold',color:'blue',backgroundColor:'#c2c2a3'}}>{items.statecode}</th>
                        <th style={{fontWeight:'bold',color:'blue',backgroundColor:'lightskyblue'}}>{items. confirmed}</th>
                       <th style={{fontWeight:'bold',color:' #ff9900',backgroundColor:'#ffcc80'}}>{items.active}</th>
                        <th style={{fontWeight:'bold',color:'green',backgroundColor:'lightgreen'}}>{items. recovered }</th>
                        <th style={{fontWeight:'bold',color:'red',backgroundColor:'#ff9999'}}>{items. deaths }</th>     
                    </tr>
                )} )
            }
                </table>
            </div>
            </div>
            </>
        
        )
    }
}
export default Indiastats; 