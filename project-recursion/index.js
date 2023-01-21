function fibonacci(number){
  if(number === 1){ return [0] }
  if(number === 2){ return [0,1] }

  return [...fibonacci(number-1), fibonacci(number-1)[number-2] + fibonacci(number-1)[number-3]]
}

console.log(fibonacci(5))
