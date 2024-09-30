export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-dis no-unused_vars */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* eslint-en no-unused-vars */

  return [task, task2];
}
