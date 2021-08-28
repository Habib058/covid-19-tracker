import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './Header.css'

const Header = ({onCountryChange, country, countries}) => {
    
    return (
        <div className="header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="dropdown">
                <Select
                    variant="outlined"
                    value={country}
                    onChange={onCountryChange}
                >
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    {
                        countries.map(country => (
                            <MenuItem value={country.value}>{country.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default Header;