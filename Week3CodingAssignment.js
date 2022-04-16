// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

/* 1a. rogrammatically subtract the value of the first element in the array from the value in the
 last element of the array (do not use numbers to reference the last element, find it programmatically,
 ages[7] – ages[0] is not allowed). Print the result to the console.*/

var lastElement = ages[ages.length - 1];
var firstElement = ages[0];
console.log(lastElement - firstElement); 

// 1. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(40);
console.log(ages); // checking to see if added age appears on console

var lastElement = ages[ages.length - 1];
var firstElement = ages[0];
console.log(lastElement - firstElement); 

/* 1c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.*/

var sum = 0;
for (i=0; i < 9; i++){
    sum += ages[i];
    var average = sum / (ages.length);
}
console.log(average);

/* 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. */

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

/* 2a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.*/
var total = 0;
for (i=0; i < 6; i++){
    total += names[i].length;
    var average = total/names.length;
}
console.log(average);

/* 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces,
 and print the result to the console. */

 var answer = ' ';
 for (i = 0; i < 6; i++) {
    answer = answer + ' ' + names[i];
 }
 console.log(answer);

 /* 3. How do you access the last element of any array? */

// using the names array from above as an example:
var lastElement = names[names.length-1];
console.log(lastElement);

/* 4. How do you access the first element of an array? */

//using the names array from above as an example:
var firstElement = names[0];
console.log(firstElement);

/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array
and add the length of each name to the nameLengths array.
For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */

var nameLengths= [];

for (i=0; i < names.length; i++){
    nameLengths.push(names[i].length);  
}
console.log(nameLengths);

/* 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
 Print the result to the console. */

 var sum = 0;
 for (i=0; i < names.length; i++){
    sum += nameLengths[i];
 }
 console.log(sum);

 /* 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to
  itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/

  function repeatString (word, n){  // I googled how to log out the same string multiple times and "repeat" info came up.
        return word.repeat(n);
  }
  console.log(repeatString('GoAvs', 3));

 /* 8. Write a function that takes two parameters, firstName and lastName, and returns a full name
  (the full name should be the first and the last name separated by a space).*/

  function getFullName (firstName, lastName){
    console.log(firstName + ' ' + lastName);
  }
  getFullName('Nathan', 'MacKinnon');

  /*9. Write a function that takes an array of numbers and returns true if the sum of all the numbers
   in the array is greater than 100.
  */

  var numbers = [10, 30, 50, 20];
  var sumNumbers = 0;

  function toughProblem(numbers){
  for (i=0; i < numbers.length; i++){
    sumNumbers += numbers[i];

      if (sumNumbers > 100){
      console.log('true');   
    }
  }
}
toughProblem(numbers);

/*10. Write a function that takes an array of numbers and
 returns the average of all the elements in the array.
*/
var moreNumbers = [2,4,6,8];
var sumMoreNumbers = 0;

function friedBrain(moreNumbers){
for (i=0; i < moreNumbers.length; i++){
    sumMoreNumbers += moreNumbers[i];
    var avg = sumMoreNumbers/moreNumbers.length;
}
console.log(avg);
}
friedBrain(moreNumbers);

