import React, { Fragment } from 'react';
import styled from '@emotion/styled' //npm i @emotion/styled @emotion/core es una libreria para escribir estilos en React


// Definiendo los style components

// Utilizo la libreria emotion styled, definiendolo como una especie de componenete, que en este caso aplica para el elemento HTML header
const ContainerHeader = styled.header`
  background-color:#26C6DA;
  padding: 10px;
  font-weight:bold;
  color:#ffffff;
`

// defino estilos para el elemento HTMl h1
const TextHeader = styled.h1`
    font-size:2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align:center;
` 

const Header = ({title}) => {
    return ( 
        <Fragment>
            <ContainerHeader> {/*reemplazo la etiqueta header por el nombre del componente de estilos*/}
                <TextHeader>{title}</TextHeader>
            </ContainerHeader>
        </Fragment>
     );
}
 
export default Header;