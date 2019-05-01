var Airport = require('../src/airport');

describe('Airport', function(){
  var airport, plane, weather;
  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);

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

    it('should stop the plane from landing when weather is stormy', function(){
      weather.isStormy.and.returnValue('Bad Weather can not land.')
      expect(function(){expect(airport.landPlane(plane))}).toThrow('Can not land Plane')
    });
  });

  describe('TakeOff', function(){
    it('should allow plane to take off', function(){
      weather.isStormy.and.returnValue('You can land anytime because the weather is great.');
      weather.isStormy.and.returnValue('You can land anytime because the weather is great.');
      weather.isStormy.and.returnValue('You can land anytime because the weather is great.');
      airport.takeOff(plane);
      airport.takeOff(planeTwo);
      airport.takeOff(planeThree);

      expect(airport.planeLandingArea).not.toContain(plane);
      expect(airport.planeLandingArea).not.toContain(planeTwo);
      expect(airport.planeLandingArea).not.toContain(planeThree);
    });

    it('should return a message', function(){
      weather.isStormy.and.returnValue('You can land anytime because the weather is great.');
      expect(airport.takeOff(plane)).toEqual('Plane has successfully taken off.');
    });

    it('should return an error when the weather is storemy',function(){
      weather.isStormy.and.returnValue('Bad Weather can not land.')
      expect(function(){ airport.takeOff(plane)}).toThrow('Can not take off');
    });
  });

});