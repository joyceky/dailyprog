'use strict';
// Locker Object Constructor
function Locker (toggleRound, isOpen) {
  this.toggleRound = toggleRound;
  this.isOpen = isOpen;
}

Locker.prototype.openLocker = function() {
  this.isOpen = true;
};

Locker.prototype.closeLocker = function() {
  this.isOpen = false;
};

// Create lockers array, then create each locker in loop and set all to closed
var lockers = [];
for (var x = 0; x <= 100; x++) {
  let locker = new Locker (x, false);
  lockers.push(locker);
}

for (var x = 1; x <= 100; x++) {
  for (var i = 1; i <= 100; i++) {
    if (x % i === 0) {
      if(lockers[x].isOpen) {
        lockers[x].closeLocker();
      }
      else if(!(lockers[x].isOpen)) {
        lockers[x].openLocker();
      }
    }
  }
}

var openLockers = [];

for (var j = 0; j < lockers.length; j++) {
  if (lockers[j].isOpen) {
    openLockers.push(lockers[j]);
  }
}

console.log("Open Lockers: " + openLockers.length);
console.log(openLockers);

// function lockers(num) {
//   return Math.floor(Math.sqrt(num));
// }
// console.log(lockers(100));
