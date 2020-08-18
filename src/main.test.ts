import sayHello from './sayhello';

it('greets', () => {
  expect(sayHello('Victor')).toBe('Hello, Victor');
});
