import React, { useEffect } from "react";
import M from 'materialize-css';

const InputSelectBrand = ({quotationDetails, handleChange}) => {

    const {brand} = quotationDetails

    useEffect(() => { M.AutoInit()}, [])

  return (
        <div className='input-field col s12'>
          <select name="brand" value={brand} onChange={handleChange} className='validate'>
            <option value="" disabled defaultValue>-- Seleccione --</option>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </select>
          <label>Marca</label>
        </div>
  );
};

export default InputSelectBrand;
