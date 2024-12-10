function inBox(box: string[]): boolean {
  const wellCreatedTopAndBottom = /^#+$/.test(box[0] + box[box.length - 1])

  if (!wellCreatedTopAndBottom) return false;

  let hasPresent = false;

  for (const layer of box) {
    if (!/^#.*#$/.test(layer)) return false;
    if (/^#.*\*.*#$/.test(layer)) hasPresent = true
  }

  return hasPresent;
}

export default async function () {
  return inBox(["###", "#*#", "###"]);
}
