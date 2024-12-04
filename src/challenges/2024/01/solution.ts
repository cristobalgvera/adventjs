function prepareGifts(gifts: number[]): number[] {
  return Array.from(new Set(gifts)).sort((a, b) => a - b);
}

export default async function () {
  return prepareGifts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]);
}
