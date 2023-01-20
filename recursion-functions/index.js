function collatz(number, counter = 0){
  if(number === 1 ){
    return counter
  } else {
    if( number % 2 === 0 ){
      return collatz(number/2, counter+1)
    }else {
      return collatz(3*number+1, counter+1)
    }
  }
}

function sumRange(number){
  if(number === 1){
    return 1
  } else {
    return number+sumRange(number-1)
  }
}

function power(base, exponential){
  if(exponential === 0){
    return 1
  }
  return base * power(base, exponential-1)
}

function factorial(number){
  if(number===1){
    return 1
  }
  return number * factorial(number-1)
}

function productOfArray(arr){
  if(arr.length === 1){
    return arr[0]
  }
  return arr.pop() * productOfArray(arr)
}


console.log(productOfArray([1,2,3,10]))
console.log(factorial(5))
console.log(power(2,8))
console.log(sumRange(3))
console.log(collatz(50))
