"use strict";

var Utility = {};

Utility.deg2rad = function (deg) {
  var conv_factor = 2.0 * Math.PI / 360.0;
  return deg * conv_factor;
};

Utility.rad2deg = function (rad) {
  var conv_factor = 360 / (2.0 * Math.PI);
  return rad * conv_factor;
};

/*
	Calculates distance in meter for 1deg of longitude and latitude - based on latitude (WGS84)
	Source: http://msi.nga.mil/MSISiteContent/StaticFiles/Calculators/degree.html
*/
Utility.calcLatLonDistances = function (Latitude_In_Degrees) {
  // Convert latitude to radians
  var lat = Utility.deg2rad(Latitude_In_Degrees);

  // Set up "Constants"
  var m1 = 111132.92; // latitude calculation term 1
  var m2 = -559.82; // latitude calculation term 2
  var m3 = 1.175; // latitude calculation term 3
  var m4 = -0.0023; // latitude calculation term 4
  var p1 = 111412.84; // longitude calculation term 1
  var p2 = -93.5; // longitude calculation term 2
  var p3 = 0.118; // longitude calculation term 3

  // Calculate the length of a degree of latitude and longitude in meters
  var latlen = m1 + m2 * Math.cos(2 * lat) + m3 * Math.cos(4 * lat) + m4 * Math.cos(6 * lat);
  var longlen = p1 * Math.cos(lat) + p2 * Math.cos(3 * lat) + p3 * Math.cos(5 * lat);

  // Distances in meters
  var lenghts = {
    lat: Math.round(latlen),
    lon: Math.round(longlen)
  };

  return lenghts;
};

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
  var miles = meters * 0.0006214;

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