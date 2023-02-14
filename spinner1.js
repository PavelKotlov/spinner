process.stdout.write('hello from spinner1.js... \rheyyy\n');

let delay = 100;
let char = ["", "|", "/", "-", "\\", "|", "/", "-", "\\", "|"]

for (const symbol of char) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}    `);
  }, delay += 200);
}