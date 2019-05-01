let Weather = require('../src/weather');

describe('Weather',function(){
  var weather;

  beforeEach(function(){
    weather = new Weather()
  });

  describe('isStormy', function(){
    it('It returns a random weather', function(){
      expect(weather.isStormy()).toEqual(4)
    });
  });
});