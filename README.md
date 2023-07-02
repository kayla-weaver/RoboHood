# _{RoboHood}_

#### By _**{Kayla Weaver}**_

#### _{This application will take a number, bring up every number before it, then replace every 1 with "Beep" 2 with "Beep" and 3 with "won't you be  my neighbor.}_

## Technologies Used

* HTML
* CSS
* JavaScript

## When you input a number, this website will list 0- your number in whole numbers, after it does  that it will replace every 1 that it finds with "Beep", every 2 that it finds with "Boop" and  every 3 that it finds with "won't you be my neighbor?"

## Setup/Installation Requirements

* Copy https://github.com/kayla-weaver/RoboHood.git
* open your terminal
* make sure your terminal is in the directory where you want to open clone by pushing pwd
* if you're not in the correct directory switch by using cd directory name
* type git clone and paste the link from step one
* this should open the project, you can run it live by opening it in VS code using the command code . in your terminal


## Known Bugs

* I have not yet got any of the substitutions to work

## License

MIT License

Copyright (c) 2023 Kayla Weaver

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. Copyright (c) 2023 Kayla Weaver

{If run into any issues or have questions, ideas or concerns. Please email me at kaylabeth1211@gmail.com I look forward hearing any input you have about my website.}
























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
