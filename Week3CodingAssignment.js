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

