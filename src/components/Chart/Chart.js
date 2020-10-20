// import React,{useState,useEffect} from "react";
// import {fetchDailyData} from '../../api/index';
// import { Line, Bar } from 'react-chartjs-2';
// import styles from './Chart.module.css';

// const Chart=({ data: { confirmed, recovered, deaths }, country }) =>{
//     const [dailyData,setDailyData]=useState([]);
//     useEffect(()=>{
//         //hum use effect ko async nahi bana skte isliye hamne uske ander async method bnaya
//         const fetchApi=async()=>{
//             setDailyData(await fetchDailyData());
//         }
//         console.log("yash"+dailyData); 
//         fetchApi();
//     },[]);

 
//     const  lineChart=(   // when the thing is initially load we are not going to have data initially loaded
//         dailyData.length!=0 ? (    <Line                        //it is a component imported from react chart-js
//       data={{
//             labels:dailyData.map(({date})=>date),  //basically a type of map method which fetches date of all objects
//             datasets:[{data:dailyData.map(({confirmed})=>confirmed),
//             label:'Infected',
//             borderColor:'#3333ff',
//             fill:true,
//             },
//             // {data:dailyData.map(({confirmed})=>confirmed),
//             // label:'Recovered',
//             // borderColor:'Green',
//             // fill:true,
//             // }
//             {
//                 data:dailyData.map(({deaths})=>deaths),
//             label:'Deaths',
//             borderColor:'red',
//             fill:true,

//             }],
//         }}
//         />):null 
//     )
//     const barChart = (
//         confirmed ? (
//           <Bar
//             data={{
//               labels: ['Infected', 'Recovered', 'Deaths'],
//               datasets: [
//                 {
//                   label: 'People',
//                   backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//                   data: [confirmed.value, recovered.value, deaths.value],
//                 },
//               ],
//             }}
//             options={{
//               legend: { display: false },
//               title: { display: true, text: `Current status in ${country}` },
//             }}
//           />
//         ) : null
//       );    
//     return(
//         <div className={styles.container}>
//         {country ?   barChart:lineChart }
//         </div>
//     )
// }
// export default Chart;

import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[1] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;