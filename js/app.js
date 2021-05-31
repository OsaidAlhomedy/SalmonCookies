'use strict';
let timeArr = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','Daily Location Total'];
let golbeVar = document.getElementById('main');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let tableEl = document.createElement('table');
golbeVar.appendChild(tableEl);
let arrOfObjects = [];

function Shops(shoploc,minCust,maxCust,avgCokie){

  this.shopLoc = shoploc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCokie = avgCokie;
  this.cookieSoldPerHour =[];
  this.totalCokiesSold = null;

}

Shops.prototype.randCusHor = function(){

  let randCustomers = getRndInteger(this.minCust,this.maxCust);
  return randCustomers;

};

Shops.prototype.cookiesAmount = function(){

  for (let i=0 ; i < 14 ; i++ ) {
    let cookieAmountPerH = this.randCusHor() * this.avgCokie;
    this.cookieSoldPerHour.push(Math.floor(cookieAmountPerH));
  }

};

Shops.prototype.totalCokieSoldFunc = function(){

  for(let i=0 ; i < this.cookieSoldPerHour.length ; i++){

    this.totalCokiesSold = this.totalCokiesSold + this.cookieSoldPerHour[i];

  }

  this.cookieSoldPerHour.push(this.totalCokiesSold);

};

Shops.prototype.tableRender = function () {

  let tr1 = document.createElement('tr');
  tableEl.appendChild(tr1);

  for(let i = -1 ;i< timeArr.length ; i++){

    let thEl = document.createElement('th');
    tr1.appendChild(thEl);
    thEl.textContent = timeArr[i];
  }

}

Shops.prototype.render = function(){
  
  let tr1El = document.createElement('tr');
  tableEl.appendChild(tr1El);
  let td1 = document.createElement('td');
  tr1El.appendChild(td1);
  td1.textContent = this.shopLoc;

  for(let j=0 ; j<this.cookieSoldPerHour.length;j++){

    let td2 = document.createElement('td');
    tr1El.appendChild(td2);
    td2.textContent = this.cookieSoldPerHour[j];


  }

  arrOfObjects.push(this);
  console.log(arrOfObjects);
};


let seattle = new Shops('Seattle',23,65,6.3);
seattle.tableRender();
seattle.cookiesAmount();
seattle.totalCokieSoldFunc();
seattle.render();
let tokyo = new Shops('Tokyo',3,24,1.2);
tokyo.cookiesAmount();
tokyo.totalCokieSoldFunc();
tokyo.render();
let dubai = new Shops('Dubai',11,38,1.2);
dubai.cookiesAmount();
dubai.totalCokieSoldFunc();
dubai.render();
let paris = new Shops('Paris',20,38,2.3);
paris.cookiesAmount();
paris.totalCokieSoldFunc();
paris.render();
let lima = new Shops('Lima',2,16,4.6);
lima.cookiesAmount();
lima.totalCokieSoldFunc();
lima.render();

console.log(firstTotalArr);