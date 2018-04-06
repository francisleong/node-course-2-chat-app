const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Francis';
    const latitude = 43.6532;
    const longitude = 79.3832;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe(url);
    expect(message.createdAt).toBeA('number');
  })
});
