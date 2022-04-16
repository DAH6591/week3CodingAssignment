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
 for (i = 0; i < names.length; i++) {
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

/* 11.Write a function that takes two arrays of numbers and returns true if the average
 of the elements in the first array is greater than the average of the elements in the second array..*/

 var firstSet = [12, 14, 16, 18];
 sumFirstSet = 0;

 for (i = 0; i < firstSet.length; i++){
  sumFirstSet += firstSet[i];
  var avgFirstSet = sumFirstSet / (firstSet.length);
 }
  console.log(sumFirstSet, avgFirstSet); //checking to see if math is correct

  var secondSet = [15, 17, 19, 21];
  sumSecondSet = 0;  

  for (i = 0; i < secondSet.length; i++){
    sumSecondSet += secondSet[i];
    var avgSecondSet = sumSecondSet / (secondSet.length);
  }  
  console.log(sumSecondSet, avgSecondSet); //checking to see if math is correct

  function compareAvgOfSets (firstSet, secondSet){
    if (avgFirstSet > avgSecondSet){
      console.log('true');
    } else {
      console.log('false');
    }
  }
  compareAvgOfSets(firstSet, secondSet);

  /*12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
  and a number moneyInPocket, and returns true if it is hot outside and
   if moneyInPocket is greater than 10.50.
  */
 
 var isHotOutside;
 var moneyInPocket;

   function willBuyDrink (isHotOutside, moneyInPocket){
      if (isHotOutside > 80 && moneyInPocket > 10.50){
        return true;
     } else {
       return false;
     }

 }
 console.log(willBuyDrink(75, 9));

 /*13.Create a function of your own that solves a problem.
  In comments, write what the function does and why you created it.
 */

  /* I would like to compare: a) miles I ran for the current week to miles I ran for the previous week and 
     b) number of cross training workouts done for the curent week to number of cross training workouts done for the previous week.
     If my miles ran and number of cross training works done for the current week are greater than miles ran and number of
     cross training workouts done for the previous week, then it will be OK for me to begin next week's training.
     If not, then I will repeat the training for the current week.
  */
  
     /* I created a function called beginNextTrainingWeek. The function compares miles run and number of cross training workouts
     for the current week to miles run and number of cross training workouts for the previous week. If current week's miles and workouts
     are greater than those for the previous week's workouts, then console logs 'OK to begin next training week'. If not, then console logs
     'Repeat training for current week'. I declared two variables for data from the previous week and used the prompt command to
     allow me to input my data from the previous week. I also declared variables that are the parameters within the function. This allows
     me to enter my data for the current week into the statement for calling the function.
    */
  let milesRanLastWeek = prompt('Number of miles ran last week:');
  let numberCrossTrainLastWeek = prompt('Number of cross training workouts last week:')
  let milesRanThisWeek; 
  let numberCrossTrainThisWeek; 
  
  function beginNextTrainingWeek (milesRanThisWeek, numberCrossTrainThisWeek){
      if (milesRanThisWeek > milesRanLastWeek && numberCrossTrainThisWeek > numberCrossTrainLastWeek){
        
        console.log('OK to begin next training week');
      } else {
         
          console.log('Repeat training for current week');
        }
      }  
beginNextTrainingWeek(25, 3);
