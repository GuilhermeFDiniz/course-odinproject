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
  return base *  power(base, exponential-1)
}


console.log(power(2,8))
console.log(sumRange(3))
console.log(collatz(50))
