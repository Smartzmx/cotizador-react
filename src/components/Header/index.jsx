import React, { Fragment } from 'react';

const Header = ({title}) => {
    return ( 
        <Fragment>
            <header>
                <h1>{title}</h1>
            </header>
        </Fragment>
     );
}
 
export default Header;