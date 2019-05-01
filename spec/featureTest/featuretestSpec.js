let Plane = require('../../src/plane');
let Airport = require('../../src/airport');
let Weather = require('../../src/weather');

describe('FeaturTest', function(){
  let airport, plane, weather;
  beforeEach(function(){
    weather = new Weather();
    airport = new Airport(weather, 10);
    plane = new Plane();
  });

  describe('Land plane', function(){
    it('should be able to land plane', function(){
      spyOn(Math,'random').and.returnValue(0.4);
      airport.landPlane(plane);
      expect(airport.planeLandingArea).toContain(plane);
    });

    it('should return a message when the plane lands', function(){
      spyOn(Math,'random').and.returnValue(0.4);
      expect(airport.landPlane()).toBe('Plane landed succesfully.');
    });
  });

  describe('Take off', function(){
    it('should allow plane to take off', function(){
      spyOn(Math,'random').and.returnValue(0.4);
      airport.takeOff(plane);
      expect(airport.planeLandingArea).not.toContain(plane);
    });

    it('should return a message when the plane takes off', function(){
      spyOn(Math,'random').and.returnValue(0.4);
      expect(airport.takeOff()).toEqual('Plane has successfully taken off.');
    });
  });
  
});

