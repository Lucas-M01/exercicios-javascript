/* Family spending system

Create an object that will have 2 properties, both of type array:
    
* incomes:     []
* expenses: []

Now, create a function that will calculate the total income and will show a message if the family has a positive or negative balance, followed by the balance amount. 

*/

let family = {
    incomes: [2500, 3200, 250.90, 360.29],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    let balanceText = "negativo"

    if (total >= 0){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()