/* Celsius to Fahrenheit

    Create a function that takes a string in Celsius or Fahrenheit and does the transformation from one unit to another

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/


function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não encontrado')
    }

    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 5/9 + 32
        degreeSign = 'F'
    }
    
    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('0C'))
    console.log(transformDegree('32F'))
} catch (error) {
    console.log(error.message)
}