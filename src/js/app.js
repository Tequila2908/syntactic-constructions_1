
export default function checkCount(count) {
  if (Number.isNaN(parseInt(count, 10)) || parseInt(count, 10) === 0) {
    throw new Error(`${count} не является числом`);
  }
  return parseInt(count, 10);
}
