import React,{Component} from "react";
 import './news.css';
import Cards from './Cards';
class News extends Component{
    constructor(props){
        super(props);
        this.state={
            articles:[]
        }
    }
componentDidMount(){
  
    fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=5c8c7efb57e2401dafa4ceae7ae031ff')
    .then( (response)=>{
        return response.json();
    })
    .then((data)=>{
        this.setState({
            articles:data.articles
        });
        //console.log(data)
    });
}
    render(){
        // console.log(this.state)
        // console.log(this.state.articles);
        return(
            <>
           <p style={{fontSize:'34px'}} className="newsheading">News Section</p>
            <Cards articles={this.state.articles}/>
            </>
        
        )
    }
}
export default News; 