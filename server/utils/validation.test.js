const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const string = 123;
    expect(isRealString(string)).toBe(false);
  });
  it('should reject string with only spaces', () => {
    const string = '   ';
    expect(isRealString(string)).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    const string = 'abc';
    expect(isRealString(string)).toBe(true);
  });
});