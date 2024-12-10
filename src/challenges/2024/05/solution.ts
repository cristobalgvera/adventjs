type Shoe = Readonly<{
  type: 'I' | 'R'
  size: number
}>

function organizeShoes(shoes: Shoe[]): number[] {
  const sizes: number[] = []

  for (let i = 0; i < shoes.length; i++) {
    const shoe = shoes[i];

    for (let j = i + 1; j < shoes.length; j++) {
      const possiblePair = shoes[j];

      if (possiblePair.size !== shoe.size || possiblePair.type === shoe.type)
        continue;

      shoes.splice(j, 1);
      sizes.push(shoe.size);
      break;
    }
  }

  return sizes;
}

export default async function () {
  return organizeShoes([
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ])
}
