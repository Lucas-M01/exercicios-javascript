/* Create a function that returns the string "Hello," concatenated with a text argument (to be passed to the
function) and with exclamation point "!" in the end.
*/

function hello(name) {
    return "Olá, " + name
}
hello("Lucas")
console.log(hello("Tiago"));
console.log(hello("Lucas"));

// Write a function that takes a person's age in years and returns the same age in days.

const years = (oldYears) => {
    return 365 * oldYears
}

console.log(years(25))

/*Develop a function that takes two parameters, one is the amount of hours worked by a
employee in a month, and how much he earns per hour. The function return must be the string "Salary equal to R$
X", where X is how much the employee earned in the month. */

function salary(hoursmonth, hours) {
    let salary = hoursmonth * hours;
    return `Salário igual a R$ ${salary}`
}

console.log(salary(150, 40.5))

/*Create a function that takes a number (from 1 to 12 and returns the corresponding month as a string.
For example, if the input is 2, the function should return "February", as this is the 2nd month. */

function 