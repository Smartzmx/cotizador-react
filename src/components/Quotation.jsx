import React, { Fragment } from 'react';
import styled from "@emotion/styled"; //npm i @emotion/styled @emotion/core es una libreria para escribir estilos en React
import {TransitionGroup, CSSTransition} from 'react-transition-group'
// npm install react-transition-group


// Definiendo los style components

// Utilizo la libreria emotion styled, definiendolo como una especie de componenete, que en este caso aplica para el elemento HTML header
const ContainerMessage = styled.p`
  padding: 1rem;
  text-align: center;
  background-color:rgb(127,224,237);
  margin-top: 2rem;
  `;

 
const ContainerQuotation = styled.div`
  padding: .5rem;
  border: 1px solid #26c6da;
  text-align: center;
  background-color:rgb(127,224,237);
  margin-top: 1rem;
  position:relative;
  `;

const AmountQuotation = styled.p`
  padding: 1rem 0;
  margin: 0;
  color:#00838f;
  font-weight:bold;
  text-transform:uppercase;
  `;

const Quotation = ({quotation}) => {

    return ( 
    <Fragment>
        {(quotation === 0) ? 
        <ContainerMessage>Elige la marca y año de tu auto, y el tipo de cobertura a cotizar.</ContainerMessage>
        : (
        <ContainerQuotation>
            <TransitionGroup
                component='p'
                className='resultado'
            >
                <CSSTransition
                    classNames='resultado'
                    key={quotation}
                    timeout={{enter:500, exit:500}}
                >
                    <AmountQuotation>El total es: ${quotation}</AmountQuotation>
                </CSSTransition>
            </TransitionGroup>
        </ContainerQuotation>
        )}
    </Fragment> 
    );
}
 
export default Quotation;