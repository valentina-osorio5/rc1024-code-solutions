export function takeAChance(name: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() <= 0.5
        ? resolve(`Hooray! You're so lucky, ${name}!`)
        : reject(new Error(`It's just bad luck, ${name}.`));
    }, 2000);
  });
}

takeAChance('Valentina')
  .then((message) => console.log(message))
  .catch((error) => console.error(`Error: ${error.message}`));
