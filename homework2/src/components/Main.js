'use strict';


let name = require('./Name');
let work = require('./Work');

name();
work();

exports.name = name;
exports.work = work;