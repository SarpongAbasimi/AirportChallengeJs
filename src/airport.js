function Airport(weather, capacity = 10){
  this.planeLandingArea = [];
  this.capacity = capacity;
  this.weather = typeof weather !== undefined ? weather : new Weather();
};

Airport.prototype = {
  constructor: Airport,
  landPlane: function(plane){
    if(this.weather.isStormy() == 'Bad Weather can not land.'){
      throw ('Can not land Plane')
    }

    if(this.planeLandingArea.length > this.capacity){
      throw ('Airport capacity is full.')
    }

    this.planeLandingArea.push(plane)
    return('Plane landed succesfully.');
  },
  takeOff: function(plane){
    if(this.weather.isStormy() == 'Bad Weather can not land.'){
      throw ('Can not take off')
    }
    let planeIndex = this.planeLandingArea.indexOf(plane)
    this.planeLandingArea.splice(planeIndex,1);
    return('Plane has successfully taken off.');
  }
}


module.exports =  Airport

