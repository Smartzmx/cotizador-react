import React, { Fragment } from 'react';
import {firstLetterUpperCase} from '../../helper';

const Summary = ({quotationDetails}) => {

    const { brand, coverage, year} = quotationDetails  

    if( brand ==='' || coverage ==='' || year==='') return null

    return ( 

    <Fragment>
        <div className='summary-container'>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: <span>{firstLetterUpperCase(brand)}</span> </li>
                <li>Año: <span>{year}</span></li>
                <li>Plan: <span>{firstLetterUpperCase(coverage)}</span> </li>
            </ul>
        </div>
    </Fragment> 

    );
}
 
export default Summary;