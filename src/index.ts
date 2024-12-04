const { default: runChallenge } = await import(`./challenges/${process.env.CHALLENGE_NAME}/solution.ts`);

console.log(await runChallenge())

export { };
