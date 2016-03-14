var expect = require('chai').expect;
var randem = require('./index');

describe('RandomInt test', function () {
  it('should return an int' , function () {
    expect(randem.randomInt(10, 50)).to.be.a('Number');
    expect(randem.randomInt()).to.be.a('Number');

  });
  it('should return false, on wrong input', function () {
    expect(randem.randomInt('b', 'a')).to.be.false;
  })
});

describe('RandomString test', function () {
  it('should return a string', function () {
    expect(randem.randomString()).to.be.a('String');
    expect(randem.randomString(2,5)).to.be.a('String');
  });
  it('should return false, on wrong input', function () {
    expect(randem.randomString('foo','bar')).to.be.false;
  });
});

describe('RandomCharacter test', function () {
  it('should return a single char', function () {
    expect(randem.randomCharacter()).to.be.a('String');
  });
  it('should return string, with length of 1', function () {
    expect(randem.randomCharacter()).to.have.lengthOf(1);
  });
  it('should return string and ignore parameters', function () {
    expect(randem.randomCharacter('asdas',1)).to.have.lengthOf(1);
  });
});


describe('RandomColor test', function () {
  it('should return an object', function () {
    expect(randem.randomRgbColor()).to.be.an('Object');
  });
  it('should return string, with 3 properties', function () {
    expect(randem.randomRgbColor()).to.have.property('r');
    expect(randem.randomRgbColor()).to.have.property('g');
    expect(randem.randomRgbColor()).to.have.property('b');
  });
  it('Properties should have int values', function () {
    var obj = randem.randomRgbColor();
    expect(obj.r).to.have.be.a('Number');
    expect(obj.g).to.have.be.a('Number');
    expect(obj.b).to.have.be.a('Number');
  });
});

describe('RandomMonth test', function () {
  it('should return a string', function () {
    expect(randem.randomMonth()).to.be.a('String');
    expect(randem.randomMonth(2,5)).to.be.a('String');
  });
  it('should return false, on wrong input', function () {
    expect(randem.randomString(13,2)).to.be.false;
  });
});

describe('RandomCountry test', function () {
  it('should return a string', function () {
    expect(randem.randomCountry()).to.be.a('String');
  });
  it('should return a value and ignore parameters', function () {
    expect(randem.randomCountry(13,2)).to.be.a('String');
    expect(randem.randomCountry('foo','bar')).to.be.a('String');
  });
});

describe('RandomName test', function () {
  it('should return a string', function () {
    expect(randem.randomName()).to.be.a('String');
  });
  it('should accept a parameter of stirng', function () {
    expect(randem.randomName('male')).to.be.a('String');
    expect(randem.randomName('female')).to.be.a('String');
  });
  it('should return a value if no parameters are given', function () {
    expect(randem.randomName()).to.be.a('String');
  });
});

describe('RandomBool test', function () {
  it ('should return a bool', function () {
    expect(randem.randomBool()).to.be.a('Boolean');
  });
});

describe('RandomElement test', function () {
  it ('should return a string if array was of strings', function () {
    var temp = ['foo', 'bar', 'baz']
    expect(randem.randomElement(temp)).to.be.a('String');
  });
  it ('should return a number if array was of numbers', function () {
    var temp = [1, 2, 3]
    expect(randem.randomElement(temp)).to.be.a('Number');
  });
  it ('should return a boolean if array was of booleans', function () {
    var temp = [true, false, false]
    expect(randem.randomElement(temp)).to.be.a('Boolean');
  });
  it ('should return false if no parameters', function () {
    expect(randem.randomElement()).to.be.false;
  });
});

describe('RandomArrayString test', function () {
  var temp = randem.randomArrayString();
  it ('should return a string array', function () {
    expect(temp).to.be.a('Array');
    expect(temp[0]).to.be.a('String');
  });
  it('should return array length 10 if no parameters', function () {
    expect(temp).to.have.lengthOf(10);
  });
  it('should return array based on parameters', function () {
    var temp = randem.randomArrayString(1,15,5);
    expect(temp).to.have.lengthOf(5);
  })
});

describe('RandomArrayInt test', function () {
  var temp = randem.randomArrayInt();
  it ('should return an int array', function () {
    expect(temp).to.be.a('Array');
    expect(temp[0]).to.be.a('Number');
  });
  it('should return array length 10 if no parameters', function () {
    expect(temp).to.have.lengthOf(10);
  });
  it('should return array based on parameters', function () {
    var temp = randem.randomArrayInt(1,15,5);
    expect(temp).to.have.lengthOf(5);
  })
});

describe('RandomArrayFloat test', function () {
  var temp = randem.randomArrayFloat();
  it ('should return an int array', function () {
    expect(temp).to.be.a('Array');
    expect(temp[0]).to.be.a('Number');
  });
  it('should return array length 10 if no parameters', function () {
    expect(temp).to.have.lengthOf(10);
  });
  it('should return array based on parameters', function () {
    var temp = randem.randomArrayFloat(1,15,5);
    expect(temp).to.have.lengthOf(5);
  });
});

describe('RandomArrayChar test', function () {
  var temp = randem.randomArrayChar();
  it ('should return an string array', function () {
    expect(temp).to.be.a('Array');
    expect(temp[0]).to.be.a('String');
  });
  it('should return array length 10 if no parameters', function () {
    expect(temp).to.have.lengthOf(10);
  });
  it('should return array based on parameters', function () {
    var temp = randem.randomArrayChar(5);
    expect(temp).to.have.lengthOf(5);
  });
  it('elements should have lengt of 1', function () {
    expect(temp[0]).to.have.lengthOf(1);
  });
});

describe('RandomArrayBool test', function () {
  var temp = randem.randomArrayBool();
  it ('should return a boolean array', function () {
    expect(temp).to.be.a('Array');
    expect(temp[0]).to.be.a('Boolean');
  });
  it('should return array length 10 if no parameters', function () {
    expect(temp).to.have.lengthOf(10);
  });
  it('should return array based on parameters', function () {
    var temp = randem.randomArrayBool(5);
    expect(temp).to.have.lengthOf(5);
  });
});

describe('RandomObj test', function () {
  it('should return an object with 4 properties', function () {
    var temp = randem.randomObject();
    expect(temp).to.be.an('Object');
    expect(temp.string).to.be.a('String');
    expect(temp.bool).to.be.a('Boolean');
    expect(temp.int).to.be.a('Number');
    expect(temp.func).to.be.a('Function');
  });
});

describe('RandomArrayObj test', function () {
  var temp = randem.randomArrayObj();
  it('should return an array of random objects', function () {
    expect(temp).to.be.a('Array');
    expect(temp[0]).to.be.an('Object');
  });
  it('should return array length 10 if no parameters', function () {
    expect(temp).to.have.lengthOf(10);
  });
  it('should return array length based on parameters', function () {
    var temp = randem.randomArrayObj(5);
    expect(temp).to.have.lengthOf(5);
  });
});