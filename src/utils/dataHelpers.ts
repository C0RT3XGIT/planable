export const duplicateArray = (arr: Array<any>) => arr.concat(arr);

export const shuffleArray = (arr: Array<any>) =>
  arr.sort(() => Math.random() - 0.5);

export const attachUniqueId = (arr: Array<any>) =>
  arr.map((item) => ({ ...item, uniqueId: Math.random() }));

export const isEven = (number: number) => number % 2 === 0;
