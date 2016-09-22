var teamMike = {
  teamName: 'Team Mike',
  myName: 'Julie',
  husbandName: 'Bruce',
  yearMarried: '2004',
  marriageCount: 'second',
  childrenCount: '4',
  mySon: 'Zeff',
  stepChild1: 'Kevin',
  stepChild2: 'Alex',
  stepChild3: 'Julie',
  homeTeam: function(){
    return "I am " + this.myName + " and my home team is " + this.teamName + ". My husband is " + this.husbandName +
    ". We were married in " + this.yearMarried + "; the " + this.marriageCount + " for each of us. " +
    "Together we have " + this.childrenCount + " children. My son's name is "+  this.mySon + ", and my stepchildren are "
    + this.stepChild1 + ", " + this.stepChild2 + ", and "  + this.stepChild3 + ".";
  }
};

document.getElementById('team').innerHTML = (teamMike.homeTeam()); // thought I'd try my hand at this
console.log(teamMike.homeTeam()); // I think this is what you were looking for
