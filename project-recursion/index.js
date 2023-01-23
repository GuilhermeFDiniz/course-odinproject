function fibonacci(number){
  if(number === 1){ return [0] }
  if(number === 2){ return [0,1] }
  return [...fibonacci(number-1),
         fibonacci(number-1)[number-2] + fibonacci(number-1)[number-3]]
}

function mergeSort(list) {
  if(list.length === 1){ return list }
  let midPoint = list.length/2
  let left = mergeSort(list.slice(0, midPoint))
  let right = mergeSort(list.slice(midPoint))
  return merge(left, right)
}

function merge(leftSide, rightSide){
  const arrayMerged = []
  while(leftSide.length > 0  && rightSide.length > 0){
    if(leftSide[0] < rightSide[0]){
      arrayMerged.push(leftSide.shift())
    } else {
      arrayMerged.push(rightSide.shift())
    }
  }
  return arrayMerged.concat(leftSide, rightSide)
}

console.log(mergeSort([1,3,2,6,4,8,7,200,123]))
