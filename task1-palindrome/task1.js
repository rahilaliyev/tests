const palindrome = (arr)=>{
  const reverse = arr.split("").reverse().join("")
  return reverse === arr
}

console.log(palindrome("ana"))

module.exports = palindrome;
