function Weather(){};

Weather.prototype = {
  stormyWeather: function(){
    return(Math.floor((Math.random() * 10) + 1));
  },

  isStormy: function(){
    if(this.stormyWeather() > 6){
      return('Bad Weather can not land.');
    }else{
      return('You can land anytime because the weather is great.'); 
    }
  }
}

module.exports = Weather;
