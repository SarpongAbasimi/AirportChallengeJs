var Airport = require('../src/airport');

describe('Airport', function(){
  var airport, plane;
  beforeEach(function(){
    airport = new Airport()

    plane = jasmine.createSpy('plane');
    planeTwo = jasmine.createSpy('planeTwo');
    planeThree = jasmine.createSpy('planeThree');
  });

  describe('LandPlane', function(){
    it('should be able to land a plane', function(){
      airport.landPlane(plane)
      airport.landPlane(planeTwo)
      airport.landPlane(planeThree)

      expect(airport.planeLandingArea).toContain(plane);
      expect(airport.planeLandingArea).toContain(planeTwo);
      expect(airport.planeLandingArea).toContain(planeThree);
    });

    it('should return a message when plane lands', function(){
      expect(airport.landPlane(plane)).toEqual('Plane landed succesfully.');
    });
  });

  describe('TakeOff', function(){
    it('should allow plane to take off', function(){
      airport.takeOff(plane);
      airport.takeOff(planeTwo);
      airport.takeOff(planeThree);

      expect(airport.planeLandingArea).not.toContain(plane);
      expect(airport.planeLandingArea).not.toContain(planeTwo);
      expect(airport.planeLandingArea).not.toContain(planeThree);
    });

    it('should return a message', function(){
      expect(airport.takeOff(plane)).toEqual('Plane has successfully taken off.');
    });
  });

});