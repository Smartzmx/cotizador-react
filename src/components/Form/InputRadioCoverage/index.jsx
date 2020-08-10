import React from "react";

const InputRadio = ({handleChange, quotationDetails}) => {

  // Desestructuring
  const { coverage } = quotationDetails;

  return (

        <div className="input-container">
          <label>Cobertura</label>
          <div className='d-flex'>
            <div className="col s-6">
              <label>
                <input 
                  className="with-gap validate" 
                  type="radio"
                  name="coverage"
                  value="limitada"
                  checked={coverage === "limitada"}
                  onChange={handleChange}  
                />
                <span>limitada</span>
              </label>
            </div>

            <div className="col s-6">
              <label>
                <input 
                  className="with-gap validate" 
                  type="radio"
                  name="coverage"
                  value="amplia"
                  checked={coverage === "amplia"}
                  onChange={handleChange}  
                />
                <span>amplia</span>
              </label>
            </div>
          </div>
        </div>
  );
};

export default InputRadio;
