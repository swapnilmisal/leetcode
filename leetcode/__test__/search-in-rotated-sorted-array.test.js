var assert = require("assert");

function test(search) {
  assert(search([4, 5, 6, 7, 0, 1, 2], 6) === 2);
  assert(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
  assert(search([4, 5, 6, 7, 0, 1, 2], -2) === -1);
  assert(search([4, 5, 6, 7, 0, 1, 2], 1) === 5);
  assert(search([4, 5, 6, 7, 0, 1, 2], 111) === -1);
  assert(search([7], 6) === -1);
  assert(search([7], 10) === -1);
  assert(search([0], 0) === 0);
  assert(search([0], 1) === -1);
  assert(search([0], -1) === -1);
  assert(search([0], -100) === -1);
  assert(search([0], 100) === -1);
  assert(search([4, 5, 6, 0, 1, 2], 6) === 2);
  assert(search([4, 5, 6, 7, 1, 2], 0) === -1);
  assert(search([4, 5, 6, 7, 0, 2], -2) === -1);
  assert(search([4, 5, 6, 7, 0, 1], 4) === 0);
  assert(search([2, 1], 1) === 1);
  assert(search([2, 1], 2) === 0);
  assert(search([2, 1], -1) === -1);
  assert(search([2, 1], 100) === -1);
}

module.exports = test;
