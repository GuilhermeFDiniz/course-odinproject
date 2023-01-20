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

console.log(sumRange(3))
console.log(collatz(50))
