// General Coding Logic

// 1. Write a function that accepts an integer and returns true if it's evenly divisible by 5, otherwise return false


// 2. Write a program that prints the next 20 leap years.

const year = prompt('please input a year to find out the next 20 years')
const counter = 20

function leapYearCalc(year, counter) {
  while (counter >= 0) {

    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      console.log(year)
      year++
      counter--
    
  
    } 
    else {
      year++
    }    
  }
}

leapYearCalc(year, counter)

// 3. Write a function that returns the number of vowels and consonants in a string (as separate values)


const str = 'The quick brown fox jumps over a lazy dog'
const vowels = str.match(/[aeiou]/gi)
const consonants = str.match(/[^aeiou$]/gi)
vowels.concat([''],consonants).forEach(function(k){
  console.log(k)
})


// 4. Write a function that takes a string containing a sentence or (body of text) and a second string containing a word and returns the number of times the word appears in the string

const count = (str) => {
  const freq = {}
  for (let i = 0; i < str.length; i++) { // you can use for...of instead!
    const currentLetter = str.charAt(i)
    freq[currentLetter] = freq[currentLetter] + 1 || 1
  }
  return freq
}
console.log(count('thequickbrownfoxjumpsoverthelazydog'))


// 5. Write a function that takes a number and returns the volume of a sphere with that diameter

const sphereVol = function() {
  // get the radius
  const radius = document.getElementById('radius').value
  const c = (4 / 3) * Math.PI * Math.pow(2 * radius, 3)
  // display the result
  document.getElementById('result').textContent = 'Volume ≈ ' + c.toFixed(4)
}




