import React from "react";
import  styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'; 
// import Chart from '../Chart/Chart';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'; 

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return 'Loading...!';
    }
   //console.log(this.data);
  console.log(confirmed.value);
    return(
        <div className={styles.container}>
            <Grid container spacing={2} justify="center">
            <Grid item component ={Card}  xs={12} md={3}className={cx(styles.card,styles.infected)}>
                <CardContent className={styles.co}>
                    <Typography variant="h4" color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography  variant="h4"><CountUp start={0} end={confirmed.value}duration={2.5}separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">number of   Active cases </Typography>
                </CardContent>
            </Grid>
            <Grid item component ={Card} xs={12} md={3}className={cx(styles.card,styles.recovered)}>
                <CardContent className={styles.co1}>
                    <Typography variant="h4"   color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h4"><CountUp start={0} end={recovered.value}duration={2.5}separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">number of   Recoveries cases </Typography>
                </CardContent>
            </Grid>

            <Grid item component ={Card} xs={12} md={3}className={cx(styles.card,styles.deaths)}>
                <CardContent className={styles.co2}>
                    <Typography variant="h4"   color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography  variant="h4"><CountUp start={0} end={deaths.value}duration={2.5}separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">number of   Recoveries cases </Typography>
                </CardContent>
            </Grid>

            

            
            </Grid>
            
            {/* <Chart/> */}
        </div>
       
    )
}
export default Cards;