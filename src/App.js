import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Quotation from './components/Quotation'
import Summary from './components/Summary'
import Spinner from './components/Spinner'

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
      <div className='max-container'>
        <Header 
          title='Cotizador de Seguros'
        />

        <div className='form-container'>
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
        </div>
      </div>
    </Fragment>
  );
}

export default App;
