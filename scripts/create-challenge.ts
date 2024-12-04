import fs from 'node:fs/promises';

const challengeName = process.env.CHALLENGE_NAME;

if (!challengeName)
  throw new Error('Please provide an environment variable CHALLENGE_NAME');

const challengePath = `src/challenges/${challengeName}`;
const challengeMd = `${challengePath}/challenge.md`;
const solutionTs = `${challengePath}/solution.ts`;

await fs.mkdir(challengePath, { recursive: true })

await Promise.all([
  fs.writeFile(challengeMd, '# TODO: Add the challenge name'),
  fs.writeFile(solutionTs, `// TODO: Add the challenge\n\n// TODO: Add the challenge usage\nexport default async function() {}\n`)
]);

console.log(`Challenge ${challengeName} created!`);
