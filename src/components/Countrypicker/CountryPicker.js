import React, { useEffect,useState } from "react";
import {NativeSelect, FormControl}from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchingCountries} from '../../api/index';
const CountryPicker=({handleCountryChange})=>{    //hamne porps ko yahi par hi destructure karliya

    const [fetchCountries,setFetchedCountries]= useState([]);
    
    useEffect(()=>{
        //hum use effect ko async nahi bana skte isliye hamne uske ander async method bnaya
        const fetchApi=async()=>{
            setFetchedCountries(await fetchingCountries());
        }
        console.log(fetchCountries);
        fetchApi();
    },[]); //khali array isliye pass kiye because use effect will only change if value in the list change or in state
        console.log(fetchCountries);
    return(
        <div className={styles.form}>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Select Country</option>
                {fetchCountries.map((country,i)=><option value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
    )
}
export default CountryPicker;
