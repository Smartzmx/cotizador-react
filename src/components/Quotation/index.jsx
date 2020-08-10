import React, { Fragment } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Quotation = ({quotation}) => {

    return ( 
    <Fragment>
        {(quotation === 0) ? 
        <p className='quotation-message'>Elige la marca y año de tu auto, y el tipo de cobertura a cotizar.</p>
        : (
        <div className='quotation-container'>
            <TransitionGroup
                component='p'
                className='resultado'
            >
                <CSSTransition
                    classNames='resultado'
                    key={quotation}
                    timeout={{enter:500, exit:500}}
                >
                    <p className='quotation-amount'>El total es:<span>${quotation}</span></p>
                </CSSTransition>
            </TransitionGroup>
        </div>
        )}
    </Fragment> 
    );
}
 
export default Quotation;