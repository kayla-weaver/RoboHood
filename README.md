Describe: getValue
Test: This should return true if the input is a number 
let number= "1234"; get value
Expected output: "true" 

Test: it should return false if the input is NaN
let number= "kitten"; get value
expected output: "false"

Test: if user inputs a number, the output will include the number and all the numbers leading up to it.
let number= "5";
expected outcome: 0, 1, 2, 3, 4, 5

Test: replace all number 1s or anything with a 1 in it with "Beep!"
let number= "5";
expected outcome: 0, "Beep!", 3, 4, 5