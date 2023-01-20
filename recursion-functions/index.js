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

console.log(collatz(50))
