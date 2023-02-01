export default function capitalize(word){
  const result = word[0].toUpperCase() + word.substring(1).toLowerCase()
  return result
}
