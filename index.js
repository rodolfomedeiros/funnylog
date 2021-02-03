module.exports = ({ delay, randomized }) => {
  const sleep = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  }

  return async (s) => {
    for (const c of s) {
      process.stdout.write(c);
      await sleep((randomized ? Math.random : 1) * delay);
    }
    process.stdout.write('\n');
  }
}