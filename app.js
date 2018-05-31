"use strict";
for (let numTime = 1; numTime < 100; numTime++) {
	if (numTime % 3 === 0 && numTime % 5 === 0) {
	  console.log("fizzbuzz");
	}
	else if (numTime % 3 === 0) {
	  console.log("fizz");
	}
	else if (numTime % 5 === 0) {
	  console.log("buzz");
	}
	else {
	  console.log(numTime);
    }
}