"use strict";

var Utility = {};

Utility.metersToFeet = function (meters) {
	var rounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	// convert to feet
	var feet = meters * 3.28084;

	// if rounded is true then round to nearest foot
	if (rounded === true) feet = Math.round(feet);

	return feet;
};

Utility.metersToMiles = function (meters) {
	var rounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	// convert to feet
	var miles = meters * .0006214;

	// if rounded is true then round to nearest mile
	if (rounded === true) miles = Math.round(miles);

	return miles;
};

Utility.metersToFL = function (meters) {
	// convert to Flight Level
	var fl = Math.round(meters * 3.28084 / 100);

	if (fl < 100) fl = "0" + fl;

	return fl;
};

Utility.curveDistance = function (distance) {
	// Takes a straight-line distance and returns the actual distance when converted into  a distance between two points on a circle. See https://en.wikipedia.org/wiki/Great-circle_distance
	// Usefull for finding the actual distance between two points points on earth

	var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
};

Utility.calculateETA = function (distance, speed) {
	// This distance is not linear. It is an arch because of the earths curvature. See https://en.wikipedia.org/wiki/Great-circle_distance

	var straightLine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
};

Utility.trackNum = function (string) {
	var number = "";
	var length = string.length;
	for (var i = 0; i < length; i++) {
		number += string.charCodeAt(i).toString(5);
	}number = number.substring(0, 4);
	return number;
};

module.exports = Utility;