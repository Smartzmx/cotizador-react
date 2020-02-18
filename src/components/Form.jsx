import React, { Fragment, useState } from "react";
import {getYearDif, getAmountBrand, getAmountCoverage} from '../helper'
import styled from "@emotion/styled"; //npm i @emotion/styled @emotion/core es una libreria para escribir estilos en React

// Definiendo los style components

// Utilizo la libreria emotion styled, definiendolo como una especie de componenete, que en este caso aplica para el elemento HTML header
const Fields = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin 0 1rem;
`;

const Btn = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: all 0.3s ease;
  margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom:2rem;
`

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
  const handleQuotationDetails= e => {
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

        {error ? <Error>Todos los campos son obligatorios</Error> : null}  
        <Fields>
          <Label>Marca</Label>
          <Select name="brand" value={brand} onChange={handleQuotationDetails}>
            <option value="">-- Seleccione --</option>
            <option value="americano">-- Americano --</option>
            <option value="europeo">-- Europeo --</option>
            <option value="asiatico">-- Asiatico --</option>
          </Select>
        </Fields>
        <Fields>
          <Label>Año</Label>
          <Select name="year" value={year} onChange={handleQuotationDetails}>
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
          </Select>
        </Fields>

        <Fields>
          <Label>Cobertura</Label>
          <InputRadio
            type="radio"
            name="coverage"
            value="limitada"
            checked={coverage === "limitada"}
            onChange={handleQuotationDetails}
          />
          Limitada
          <InputRadio
            type="radio"
            name="coverage"
            value="amplia"
            checked={coverage === "amplia"}
            onChange={handleQuotationDetails}
          />
          Amplia
        </Fields>

        <Btn type="submit">Cotizar</Btn>
      </form>
    </Fragment>
  );
};

export default Form;
