const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Room A'
    }, {
      id: '2',
      name: 'Frank',
      room: 'Room B'
    }, {
      id: '3',
      name: 'Bob',
      room: 'Room A'
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user  = {
      id: '123',
      name: 'Francis',
      room: 'First Room'
    };

    const resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userId = '1';
    const user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userId = '99';
    const user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);
    expect(user.id).toBe('2');
  });

  it('should not find user', () => {
    const userId = '99';
    const user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names for Room A', () => {
    const userList = users.getUserList('Room A');
    expect(userList).toEqual(['Mike', 'Bob']);
  });

  it('should return names for Room B', () => {
    const userList = users.getUserList('Room B');
    expect(userList).toEqual(['Frank']);
  });
});