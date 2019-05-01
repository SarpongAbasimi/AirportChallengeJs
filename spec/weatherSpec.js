let Weather = require('../src/weather');

describe('Weather',function(){
  var weather;

  beforeEach(function(){
    weather = new Weather()
  });

  describe('stormyWeather', function(){
    it('gives a random number', function(){
      spyOn(Math,'random').and.returnValue(0.4);
      expect(weather.stormyWeather()).toBe(5);
    });
  });

  describe('isStormy', function(){
    it('gives a message if it is not stormy', function(){
      let goodMessage = 'You can land anytime because the weather is great.'
      spyOn(Math,'random').and.returnValue(0.4);
      expect(weather.isStormy()).toBe(goodMessage);
    });

    it('gives a message if it is stormy', function(){
        let badMessage = 'Bad Weather can not land.'
        spyOn(Math,'random').and.returnValue(0.6);
        expect(weather.isStormy()).toBe(badMessage);
      });
  });

});