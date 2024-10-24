const add = (a: number, b: number): number => {
  //check a and b are numbers or throw invalid input
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input');
  }
  return a + b;
};

export default add;
