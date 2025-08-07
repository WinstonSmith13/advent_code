export function solve(input) {

  const regex = /(?<type>do\(\)|don't\(\)|mul\((\d+),(\d+)\))/g;
  const matches = [...input.matchAll(regex)];

  let isAllowed = true;
  const results = [];

  for (const m of matches) {
    if (m.groups.type === "don't()") {
      isAllowed = false;
    } else if (m.groups.type === "do()") {
      isAllowed = true;
    } else if (isAllowed) {
      const num1 = Number(m[2]);
      const num2 = Number(m[3]);
      const product = num1 * num2;
      results.push(product);
    }
  }

  const total = results.reduce((acc, val) => acc + val, 0);
  return total;
}
