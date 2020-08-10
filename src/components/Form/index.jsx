import React, { Fragment, useState } from "react";
import InputSelectBrand from './InputSelectBrand'
import InputSelectYear from './InputSelectYear'
import InputRadioCoverage from './InputRadioCoverage'
import {getYearDif, getAmountBrand, getAmountCoverage} from '../../helper'

const Form = ({setSummary, setLoading}) => {

  // Set the state's form  
  const [quotationDetails, setQuotationDetails] = useState({
    brand: "",
    year: "",
    coverage: ""
  });

  const [error, setError] = useState(false);

  // Desestructuring
  const { brand, year, coverage } = quotationDetails;

  // Extract iquotationInfofrom the form and update the state
  const handleChange= e => {
    setQuotationDetails({
      ...quotationDetails,
      [e.target.name]: e.target.value
      // el código anterior permite identificar que campo es el que esta activado y toma su valor
    });
  };

  const handleSubmit = (e) =>{

    // cancel the default event of submit
      e.preventDefault()

    // Validated the info  
    if(brand.trim() === '' || year.trim() === '' || coverage.trim() === ''){
        setError(true)
        return
    } else {
        setError(false)
    }

    // Define the base amount of 2000
    let amountPay= 2000

    // Calculate the difference between the current year Vs year selected

    const calcYearDif = getYearDif(year)

    // By each year get substraction of 3% of the value

    amountPay -= ((calcYearDif * 3) * amountPay) / 100

    // Incrementer by brand
    // Americano 15%, Asiatico 5% and Europeo 30%

    amountPay = amountPay * getAmountBrand(brand)

    // Coverage increments: basica: 20% amplia:50%

    amountPay = parseFloat(getAmountCoverage(coverage) * amountPay).toFixed(2)

    // loaging spinner & Get the total amount
    setLoading(true)

    setTimeout(()=>{

      setLoading(false)

      setSummary({
        quotation: amountPay,
        quotationDetails
      })
    },3000)
    
  }

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
      >

        {error ? <div className='error'>Todos los campos son obligatorios</div> : null}  
        <div className='row'>
          <div className='col s12 m6 p-0'>
            <InputSelectBrand
              quotationDetails={quotationDetails}
              handleChange={handleChange}
            />
          </div>
          <div className='col s12 m6 p-0'>
            <InputSelectYear
              quotationDetails={quotationDetails}
              handleChange={handleChange}
            />
          </div>
        </div>

        <InputRadioCoverage
          quotationDetails={quotationDetails}
          handleChange={handleChange}
        />
        <div className='btn-container'>
          <button class="btn waves-effect waves-light" type="submit" name="action">Cotizar
            <i class="material-icons right">send</i>
          </button>
        </div>
        
        
      </form>
    </Fragment>
  );
};

export default Form;