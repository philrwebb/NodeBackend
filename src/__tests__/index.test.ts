import { add, subtract } from '../math/basicmaths';

describe('Add', () => {
  it('add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  it('it should throw an exception if other than two numbers is passed', () => {
    const result = () => add(1, 'a' as any);
    expect(result).toThrow('Invalid input');
  });
});

describe('Subtract', () => {
  it('subtract two numbers', () => {
    const result = subtract(5, 4);
    expect(result).toBe(1);
  });

  it('it should throw an exception if other than two numbers is passed', () => {
    const result = () => subtract(1, 'a' as any);
    expect(result).toThrow('Invalid input');
  });
});
