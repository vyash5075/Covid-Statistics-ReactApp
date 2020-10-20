import React ,{Component} from 'react';
import Cards from '../Cards/Cards';
import Chart from '../Chart/Chart';
import CountryPicker from '../Countrypicker/CountryPicker';
import styles from '../../App.module.css';
import {fetchData} from '../../api/index';
import coronaimage from'../../images/covid.png';


class Home extends React.Component {
state={
  data:{},
  country:'',

}
  async componentDidMount(){
    const fetchedData=await fetchData();
    console.log("fetchedData"+fetchedData);
    this.setState({data:fetchedData});
   // console.log("aaaaa"+this.data.value);
  }
  handleCountryChange=async(country)=>{
    console.log(country);
    if(country=='global')
    {
      console.log("globalllll"); 
      const fetchedData=await fetchData();
      console.log(fetchedData);
      this.setState({data:fetchedData});
      this.setState({country:''});
    }
    else{
      console.log("country"+country);
    const fetchedData=await fetchData(country);
    console.log(country);
    this.setState({data:fetchedData,country:country});
    }
    //fetch the data and then set the state

  }
  render(){
    //destructure the state from statee
    const {data,country}=this.state;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaimage} alt='covid-19'/>
     <Cards data={data}/>
     <CountryPicker handleCountryChange={this.handleCountryChange }></CountryPicker>
       <Chart data={data} country={country}/>
         
     
    </div>
  );
}
}

export default Home;
