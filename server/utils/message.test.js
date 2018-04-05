const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Francis';
    const text = 'This is the message text';
    const message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  });
});