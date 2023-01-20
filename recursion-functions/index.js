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

var allAreLessThanSeven = all([1,0,6], function(num){
	return num < 7;
});

function all(arr, callback){
  if(arr.length === 0){
    return true
  }
  number = arr.pop()
  if(callback(number)===false){
    return false
  }
  return all(arr, callback)
}



console.log(allAreLessThanSeven)
