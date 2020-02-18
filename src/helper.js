// Function to calculate the difference between the current year Vs the year selected
export function getYearDif (year){
    return new Date().getFullYear() - parseInt(year)
}

// Function to calculate the amount to pay acording the brand selected
export function getAmountBrand (brand){

    let increment

    switch(brand){
        case 'europeo':
            increment = 1.3
            break;
        case 'americano':
            increment=1.15
            break;
        case 'asiatico':
            increment=1.05  
            break;  
        default:
            break;
    }
    return increment
}

// Function to calculate the amount by each type of coverage
export function getAmountCoverage (coverage){
    return (coverage === 'limitada') ? 1.2 : 1.5
}

// Muestra la primera letra en mayuscula
export function firstLetterUpperCase (string){
    return string.charAt(0).toUpperCase()+ string.slice(1)
}
