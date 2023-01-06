

const add = (num1, num2) => {

    console.log(num1 + num2)

}


const sub = (num1, num2) => {

    console.log(num1 - num2)

}

const mul = (num1, num2) => {

    console.log(num1 * num2)

}


const calculator = (num1, num2 , operation) => {

    operation(num1, num2)

}


calculator(50,50, mul)