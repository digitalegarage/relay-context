'use strict';

var _ = require('./');

describe('relay-context', function () {
  it('returns "Context" as well as "QueryRenderer"', function () {
    expect(_.Context).toBeTruthy();
    expect(_.QueryRenderer).toBeTruthy();
  });
});