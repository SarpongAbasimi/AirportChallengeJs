function Airport(weather){
  this.planeLandingArea = [];
  this.weather = typeof weather !== undefined ? weather : new Weather()
};

Airport.prototype = {
  constructor: Airport,
  landPlane: function(plane){
    this.planeLandingArea.push(plane)
    return('Plane landed succesfully.');
  },
  takeOff: function(plane){
    if(this.weather.isStormy() == 'Bad Weather can not land.'){
      throw ('can not take off')
    }
    let planeIndex = this.planeLandingArea.indexOf(plane)
    this.planeLandingArea.splice(planeIndex,1);
    return('Plane has successfully taken off.');
  }
}


module.exports =  Airport

