let Plane = require('../../src/plane');
let Airport = require('../../src/airport');

describe('FeaturTest', function(){
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('Land plane', function(){
    it('should be able to land plane', function(){
      airport.landPlane(plane);
      expect(airport.planeLandingArea).toContain(plane);
    });

    it('should return a message when the plane lands', function(){
      expect(airport.landPlane()).toBe('Plane landed succesfully.');
    });
  });

  describe('Take off', function(){
    it('should allow plane to take off', function(){
      airport.takeOff(plane)
      expect(airport.planeLandingArea).not.toContain(plane);
    });

    it('should return a message when the plane takes off', function(){
      expect(airport.takeOff()).toEqual('Plane has successfully taken off.');
    });
  });
  
});

