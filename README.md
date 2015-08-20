# randem
NPM module that gives you random stuff

##Instalation
On the console write :

`npm install randem`

##Usage

`var randem = require('randem');`
`var randomInteger = randem.randomInt();`

`var randomFlo = randem.randomFloat();`

`var randomString = randem.randomString();`

`var randomChar = randem.randomCharacter();`

`var randomColor = randem.randomRgbColor();`

`var randomMo = randem.randomMonth();`

`var randomCo = randem.randomCountry();`

`var randomNa = randem.randomName();`

`var randomEle = randem.randomElement();`

`var randomBoolean = randem.randomBool();`

You can pass two int arguements to `randomInt` and `randomFloat` to get
a number between the two arguements.

Also you can pass two int arguements to `randomString` to get a string with length
between the two arguements.

I hope to include more random stuff, like object keys, arrays , etc soon.

I apprecieate all PR's.

Test will be done at a later date.