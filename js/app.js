'use strict';
let timeArr = ['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :', 'Total :']
let golbeVar = document.getElementById('main');

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
      this.cookieSoldPerHour.push(Math.floor(cookieAmountPerH));
      console.log(this.cookieSoldPerHour);
    }

  },

  totalCokieSoldFunc : function() {
    for(let i=0 ; i < this.cookieSoldPerHour.length ; i++){
      this.totalCokiesSold = this.totalCokiesSold + this.cookieSoldPerHour[i];
    }
    this.cookieSoldPerHour.push(this.totalCokiesSold);

  },
  renderCookieAmmount : function(){

    let ulEl = golbeVar.appendChild(document.createElement('ul'));
    for ( let i=0 ; i<timeArr.length ; i++) {

      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =`${timeArr[i]} ${this.cookieSoldPerHour[i]}`;
    }


  },


}

Seattle.cookiesAmount();
Seattle.totalCokieSoldFunc();
Seattle.renderCookieAmmount();
console.log(Seattle);
console.log(Seattle.totalCokiesSold);