import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GraphContent from '../GraphContent/GraphContent';
import MainContent from '../MainContent/MainContent';
import { sortedData } from '../Util';
import './Home.css'

const Home = () => {
    const [country, setCountry] = useState('worldwide');
    const [countryInfo,setCountryInfo] = useState({});
    const [tableData,setTableData] = useState([])

    const [countries, setCountries] = useState([]);
 
    useEffect(() => {
        //https://corona.lmao.ninja/v3/covid-19/all
        //https://corona.lmao.ninja/v3/covid-19/countries/[country_code]
        const getCountriesData = async () => {
            await fetch('https://corona.lmao.ninja/v3/covid-19/countries')
                .then(res => res.json())
                .then(data => {
                    const countriesInfo = data.map(country => ({
                        name: country.country,
                        value: country.countryInfo.iso2
                    }))
                    const sortedTableData = sortedData(data)
                    setCountries(countriesInfo);
                    setTableData(sortedTableData);
                })
        }
        getCountriesData()
    }, [])

    useEffect(()=>{
      fetch('https://corona.lmao.ninja/v3/covid-19/all')
      .then(res =>res.json())
      .then(data =>setCountryInfo(data))
    },[])
    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        // console.log(countryCode);
        
        const url = countryCode === 'worldwide'? 'https://corona.lmao.ninja/v3/covid-19/all' :`https://corona.lmao.ninja/v3/covid-19/countries/${countryCode}`
        await fetch(url)
        .then(res =>res.json())
        .then(data=> {
            setCountry(countryCode);
            setCountryInfo(data);
        })
    }
    return (
        <div className="app">
            <MainContent className='left'
            country ={country} 
            countryInfo = {countryInfo} 
            onCountryChange={onCountryChange}
            countries={countries}
            />
            <GraphContent  className='right' 
            tableData={tableData}
            />
        </div>
    );
};

export default Home;