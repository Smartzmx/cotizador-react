import React, { Fragment } from 'react';
import {firstLetterUpperCase} from '../helper'
import styled from "@emotion/styled"; //npm i @emotion/styled @emotion/core es una libreria para escribir estilos en React

// Definiendo los style components

// Utilizo la libreria emotion styled, definiendolo como una especie de componenete, que en este caso aplica para el elemento HTML header
const ContainerSumary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color:#00838f;
  color:#ffffff;
  margin-top: 1rem;
  `;

const Summary = ({quotationDetails}) => {

    const { brand, coverage, year} = quotationDetails  

    if( brand ==='' || coverage ==='' || year==='') return null

    return ( 

    <Fragment>
        <ContainerSumary>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {firstLetterUpperCase(brand)} </li>
                <li>Año: {year} </li>
                <li>Plan: {firstLetterUpperCase(coverage)} </li>
            </ul>
        </ContainerSumary>
    </Fragment> 

    );
}
 
export default Summary;