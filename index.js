/**
 * File: index.js
 * Version: 1.0.0
 * Author: Aidan Maizels
 * Date created: 24/08/2025
 * Date last modified: 24/08/2025
 * Description: This program will implement a range of algorithms to manipulate strings.
 */

// Question 1: Define the strings

  myString = "This is a string";
  anotherString = "   Another string";
  hello = "Hello there!";
  myName = "Aidan";

  // Printing strings in the console
  console.log(myString);
  console.log(anotherString);
  console.log(hello);
  console.log(myName);

// Question 2: Use utility functions length and char to find out information
  // Length of myString
  console.log('Question 2: myString length is: ' + myString.length);

  // First character of myString
  console.log('Question 2: First character of myString  is: ' + myString.charAt(0));

  // Eleventh character of myString
  console.log('Question 2: Eleventh character of myString  is: ' + myString.charAt(10));

// Question 3: Use slice and substring functions to create new strings

  // Slice 'is a' from myString
  console.log('Question 3: Sliced string output is: ' + myString.slice(5, 9));

  // Using substring to get “the” from anotherString
  console.log('Question 3: Substring output is: ' + anotherString.substring(6, 9));

// Question 4: Change case of string

  // Print myName string in all uppercase
  console.log('Question 4: myName is uppercase is: ' + myName.toUpperCase());

  // Print myName string in all lowercase
  console.log('Question 4: myName is lowercase is: ' + myName.toLowerCase());

// Question 5: Use concat, trim, replace and split to create new strings 

  // Concat hello and myName together
  let newString1 = hello.concat(myName);
  console.log('Question 5: new concatenated string is: ' + newString1);

  // Remove spaces in anotherString
  let newString2 = anotherString.trim();
  console.log('Question 5: new trimmed string is: ' + newString2);

  // Replace 'is a' for an empty space in myString
  let newString3 = myString.replace("is a", " ");
  console.log('Question 5: new replaced string is: ' + newString3);

  // Split myString on the spaces
  let stringSplit = myString.split(" ");
  console.log('Question 5: myString split on the spaces is: ' + stringSplit);

// Question 6: Create algorithms

  // Importing the file system module for safety
  const fs = require('fs');
  let data = 'This is a string which will be saved to a text file.'

  // Algorithm for saving string to text using the writeFile function
  console.log('Question 6: Writing to file...');
  fs.writeFile('output.txt', data, (err) => {
    // Check for errors
    if (err) {
      console.error(err);
      return;
    } else {
      // Log that file was successfully written
      console.log('File written successfully');
    }
  });

  // Algorithm for reading the text in the file
  console.log('Question 6: Reading from file...');
  fs.readFile('output.txt', (err, fileText) => {
    // Check for errors
    if(err) {
      console.error(err);
      return;
    }
    // Output the read file to the console
    console.log('The file contents are: ' + fileText.toString());
  });

  // Question 7: Write a text file

  // See answer to above question for the 'output.txt' file naming and defining the string
