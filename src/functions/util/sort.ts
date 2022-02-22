import { PokemonType } from "../../types/pokemon.types"

const _merge = (left: PokemonType[], right: PokemonType[]): PokemonType[] => {
  const output: PokemonType[] = [];

  let leftIDX = 0;
  let rightIDX = 0;

  while (leftIDX < left.length && rightIDX < right.length) {
    const leftElement = left[leftIDX];
    const rightElement = right[rightIDX];

    if (leftElement.name < rightElement.name) {
      output.push(leftElement)
      leftIDX++;
    } else {
      output.push(rightElement)
      rightIDX++;
    }
  }
  return [...output, ...left.slice(leftIDX), ...right.slice(rightIDX)];
}

export const mergeSort = (a: PokemonType[]): PokemonType[] => {
  if (a.length <= 1) return a;

  const middle = Math.floor(a.length / 2);
  const left = a.slice(0, middle);
  const right = a.slice(middle, a.length);

  return _merge(
    mergeSort(left), 
    mergeSort(right),
  );
}