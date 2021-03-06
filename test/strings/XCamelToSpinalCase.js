'use strict';
var filterName = __filename.replace('/test/', '/filters/'),
  filter = require(filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return false on empty', function () {
    expect(filter()).to.be.falsy;
  });

  it('return item on match', function () {
    expect(filter('aGrayFoxLeaped')).to.equal('a-gray-fox-leaped');
  });
});
