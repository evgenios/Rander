NPM module that gives you random stuff.

## Instalation

On the console write :

`npm install randem`

## Usage

*First require the module!*

`var randem = require('randem');`

*Then you can get random values by using the functions :*

`var randomInteger = randem.randomInt();`

`var randomFlo = randem.randomFloat();`

`var randomString = randem.randomString();`

`var randomChar = randem.randomCharacter();`

`var randomColor = randem.randomRgbColor();`

`var randomMo = randem.randomMonth();`

`var randomCo = randem.randomCountry();`

`var randomNa = randem.randomName();`

`var randomEle = randem.randomElement();`

`var randomArrayString = randem.randomArrayString();`

`var randomArrayInt = randem.randomArrayInt();`

`var randomArrayFloat = randem.randomArrayFloat();`

`var randomArrayBool = randem.randomArrayBool();`

`var randomArrayChar = randem.randomArrayChar();`

`var randomObject = randem.randomObject();`

`var randomArrayObj = randem.randomArrayObj();`

### Notes

You can pass two int arguements to `randomInt` and `randomFloat` to get
a number between the two arguements. If not included they default between 0 and 100.
You can also include one of the two only.

Also you can pass two int arguements to `randomString` to get a string with length
between the two arguements.You can also include one of the two only. Please note,
that it will not work if the starting length is bigger than the ending length.
The points also have to be greater than 0.

**If there is anything wrong with your supplied values, the returned value will be `false`.**
**Else, if the function does not require parameters, it will simply return the value requested**

I apprecieate all PR's.
### Tests
**To run the tests, use `npm test` from the command line.**


### Future
Will probably refactor the code at some point to be more robust.
Any ideas for other random stuff are appreciated.
Thanks for looking!
