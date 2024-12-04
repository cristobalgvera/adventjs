function createFrame(names: string[]): string {
  const PADDING = 2;

  const greaterLengthName = Math.max(...names.map(name => name.length));
  const border = '*'.repeat(greaterLengthName + PADDING * 2);

  return names
    .reduce((frame, name) => {
      const whitespaces = " ".repeat(greaterLengthName - name.length);
      const formattedName = `* ${name}${whitespaces} *`;

      return `${frame}\n${formattedName}`;
    }, border)
    .concat(`\n${border}`);
}

export default async function () {
  return createFrame(["John", "Art", "Anna"]);
}
