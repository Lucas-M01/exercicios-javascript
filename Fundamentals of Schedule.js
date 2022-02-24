/* Create a function that returns the string "Hello," concatenated with a text argument (to be passed to the
function) and with exclamation point "!" in the end.
*/

function hello(name) {
    return "1) Olá, " + name + "!"
}
console.log(hello("Tiago"));
console.log(hello("Lucas"));

// Write a function that takes a person's age in years and returns the same age in days.

const years = (oldYears) => {
    return 365 * oldYears
}

console.log(`2) ${years(25)}`)

/*Develop a function that takes two parameters, one is the amount of hours worked by a
employee in a month, and how much he earns per hour. The function return must be the string "Salary equal to R$
X", where X is how much the employee earned in the month. */

function salary(hoursMonth, hours) {
    let salary = hoursMonth * hours;
    let impost = salary * 0.3;
    let Final = salary - impost;
    return `Salário igual a R$ ${salary} subtraindo 30% de imposto fica com R$ ${Final}`
}

console.log(`3) ${salary(150, 40.5)}`)

/*Create a function that takes a number (from 1 to 12 and returns the corresponding month as a string.
For example, if the input is 2, the function should return "February", as this is the 2nd month. */

function mouth(number) {
    switch(number) {
        case 1:
            console.log("4) January")
            break
        case 2:
            console.log("4) February")
            break
        case 3:
            console.log("4) March")
            break
        case 4:
            console.log("4) April")
            break
        case 5:
            console.log("4) May")
            break
        case 6:
            console.log("4) June")
            break
        case 7:
            console.log("4) July")
            break
        case 8:
            console.log("4) August")
            break
        case 9:
            console.log("4) September")
            break
        case 10:
            console.log("4) October")
            break
        case 11:
            console.log("4) November")
            break
        case 12:
            console.log("4) December")
            break
        default:
            console.log("4) Invalid")
            break
    }
}

mouth(9)

/*Create a function that takes two numbers and returns whether the first is greater than or equal to the second. */

const equal = (n1, n2) => {
    if(typeof n1 != typeof n2) {
        return false
    }else if(n1 >= n2){
        return true
    }else{ return false}
}

console.log("5) " + equal(0, '0'))

/* Write a function that takes a boolean or numeric value. If the given parameter s boolean, the The function's return must be the reverse. For example, if the input is false, it will return true. If the parameter is numeric, the return will be the inverse number. For example, if 1 is given,the return will be -1. If the parameter of input is of the above types, return "expected boolean or number, but the parameter is of type..."*/

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == 'boolean') return !valor
    else if(tipo == 'number') return -valor
    else return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log("6)" + inverso("Eu"))

/*Create a function that takes four numbers as a parameter (number, minimum, maximum, inclusive) and returns if
the number parameter (the first one) is between minimum and maximum. When the inclusive parameter is true, have
"between" as inclusive, that is, considering whether number is equal to minimum or maximum. If the parameter
inclusive is not informed, its default value must be false, so the logic will be exclusive, not
considering whether number is equal to minimum or maximum. */

