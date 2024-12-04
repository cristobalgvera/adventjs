type Inventory = readonly Readonly<{
  name: string, quantity: number, category: string
}>[]

function organizeInventory(inventory: Inventory): object {
  const result: Record<string, Record<string, number>> = {};

  for (const { name, quantity, category } of inventory) {
    result[category] ??= {};
    result[category][name] ??= 0;
    result[category][name] += quantity;
  }

  return result;
}

export default async function () {
  return organizeInventory([
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ])
}
