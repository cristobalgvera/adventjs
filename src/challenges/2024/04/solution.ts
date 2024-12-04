function createXmasTree(height: number, ornament: string): string {
  const SPACE = '_';

  const maxWidth = 2 * height - 1;
  const middlePadMaxWidth = (maxWidth - 1) / 2;
  const trunkSpaces = SPACE.repeat(middlePadMaxWidth)
  const trunk = `${trunkSpaces}#${trunkSpaces}`;

  const tree: string[] = [];

  for (let i = 1; i <= height; i++) {
    const treeLineWidth = 2 * i - 1;
    const spacesBySide = SPACE.repeat((maxWidth - treeLineWidth) / 2);

    tree.push(
      spacesBySide + ornament.repeat(treeLineWidth) + spacesBySide
    );
  }

  tree.push(trunk, trunk);

  return tree.join('\n');
}

export default async function () {
  return createXmasTree(5, '&');
}
