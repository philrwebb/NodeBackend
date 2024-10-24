import add from '../math/add';

describe('Add', () => {
  it('add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  it('it should throw an exception if other than two numbers is passed', () => {
    const result = () => add(1, 'a' as any);
    expect(result).toThrowError('Invalid input');
  });
});
