import React, { useEffect } from "react";
import M from 'materialize-css';

const InputSelect = ({handleChange, quotationDetails}) => {

    const {year} = quotationDetails
    useEffect(() => { M.AutoInit()}, [])

  return (
        <div className='input-field col s-12'>
          <select name="year" value={year} onChange={handleChange} className='mr-0'>
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </select>
          <label>Año</label>
        </div>
  );
};

export default InputSelect;
