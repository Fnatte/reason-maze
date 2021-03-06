'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function FromSimple(Simple) {
  var Coord = Simple[/* Coord */0];
  var adjacents = function () {
    return Simple[/* adjacents */1];
  };
  var adjacent_coord = function (coord, direction) {
    return Curry._2(Coord[/* offset */0], coord, Curry._1(Simple[/* adjacent_coord */2], direction));
  };
  var direction_to_border = function () {
    return Simple[/* direction_to_border */3];
  };
  var to_shape = function () {
    return Simple[/* shape */4];
  };
  return /* module */[
          /* Coord */Coord,
          /* adjacents */adjacents,
          /* adjacent_coord */adjacent_coord,
          /* direction_to_border */direction_to_border,
          /* to_shape */to_shape
        ];
}

exports.FromSimple = FromSimple;
/* No side effect */
