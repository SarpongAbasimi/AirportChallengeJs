function Airport(){
  this.planeLandingArea = [];
};

Airport.prototype = {
  constructor: Airport,
  landPlane: function(plane){
    this.planeLandingArea.push(plane)
    return('Plane landed succesfully');
  },
  takeOff: function(plane){
    let planeIndex = this.planeLandingArea.indexOf(plane)
    this.planeLandingArea.splice(planeIndex,1);
    return('Plane has successfully taken off');
  }
}


module.exports =  Airport

