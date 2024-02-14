export const duplicateArray = (arr: Array<any>) => arr.concat(arr);

export const shuffleArray = (arr: Array<any>) =>
  arr.sort(() => Math.random() - 0.5);

export const generateUniqueId = (arr: Array<any>) =>
  arr.map((item) => ({ ...item, id: Math.random() }));
