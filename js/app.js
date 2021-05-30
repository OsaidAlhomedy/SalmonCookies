'use strict';

let salesArr = [];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


let Seattle ={

  shopLoc : 'Seattle',
  minCust : 23 ,
  maxCust : 65 ,
  avgCokie : 6.3 ,
  cookieSoldPerHour :[],
  totalCokiesSold : null,

  randCusHor : function(){
    let randCustomers = getRndInteger(this.minCust,this.maxCust)
    return randCustomers;
  },
  cookiesAmount : function(){
    for (let i=0 ; i < 14 ; i++ ) {
      let cookieAmountPerH = this.randCusHor() * this.avgCokie;
      this.cookieSoldPerHour.push(cookieAmountPerH);
      console.log(this.cookieSoldPerHour);
    }

  },

  totalCokieSoldFunc : function() {
    for(let i=0 ; i < this.cookieSoldPerHour.length ; i++){
      this.totalCokiesSold = this.totalCokiesSold + this.cookieSoldPerHour[i];
    }

  },
  renderCookieAmmount : function(){
    
  },


}

Seattle.cookiesAmount();
Seattle.totalCokieSoldFunc()
console.log(Seattle);
console.log(Seattle.totalCokiesSold);