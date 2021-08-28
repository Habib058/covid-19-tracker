import React from 'react';
import Header from '../Header/Header';
import InfoStates from '../InfoStates/InfoStates';
import './MainContent.css'

const MainContent = ({country, countryInfo, onCountryChange, countries}) => {
    
    
    return (
        <div className='left'>
        <div>
          <Header countries={countries} country ={country} onCountryChange={onCountryChange} />
        </div>
        <div>
          <InfoStates countryInfo={countryInfo} />
        </div>
      </div>
    );
};

export default MainContent;