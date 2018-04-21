const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const res = generateMessage('Kaden', 'Hey');
    expect(res.from).toBe('Kaden');
    expect(res.text).toBe('Hey');
  });
});