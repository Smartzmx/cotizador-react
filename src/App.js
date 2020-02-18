import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Quotation from './components/Quotation'
import Summary from './components/Summary'
import Spinner from './components/Spinner'

import styled from '@emotion/styled' //npm i @emotion/styled @emotion/core es una libreria para escribir estilos en React

// defino estilos para el elemento HTMl div
const Container = styled.div`
  max-width:600px;
  margin:0 auto;
`

// defino estilos para el elemento HTMl div
const ContainerForm = styled.div`
  background-color:#ffffff;
  padding: 3rem;
`

function App() {

  const [summary, setSummary] = useState({
    quotation:0,
    quotationDetails:{
      brand:'',
      year:'',
      coverage:''
    }
  })
  
  const [loading, setLoading] = useState(false)


  // Destructuring
  const {quotation, quotationDetails } = summary

  return (
    <Fragment>
      <Container>
        <Header 
          title='Cotizador de Seguros'
        />

        <ContainerForm>
          <Form 
            setSummary={setSummary}
            setLoading={setLoading}
          />

          {/*ternario para que no se muestre el componente de Spinner*/}
          {loading ? <Spinner /> : null }
           
          <Summary 
            quotationDetails={quotationDetails} 
          /> 

          { !loading ? 
            <Quotation 
            quotation={quotation}
            />  
            : null  
          }
           
                    
        </ContainerForm>
      </Container>
    </Fragment>
  );
}

export default App;
