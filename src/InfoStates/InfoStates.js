import React from 'react';
import { useState } from 'react';
import InfoBoxes from '../InfoBoxes/InfoBoxes';
import './InfoStates.css'

const InfoStates = ({countryInfo}) => {
    
    return (
        <div className="stats">
          <InfoBoxes title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}></InfoBoxes>
          <InfoBoxes title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}></InfoBoxes>
          <InfoBoxes title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}></InfoBoxes>
        </div>
    );
};

export default InfoStates;