import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(stdlib.parseCurrency(6000))
const accBob = await stdlib.newTestAccount(startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const choiceArray = ["I'm not here.", "I'm still here."];

const getBalance = async (who) => stdlib.formatCurrency(await stdlib.balanceOf(who));

console.log(`Alice's balance before is: ${await getBalance(accAlice)}`);
console.log(`Bob's balance before is: ${await getBalance(accBob)}`);

const shared = (who) => ({
  showTime: (t) => {
    console.log(`${who} saw deadline time ${t}`);
  },
  informTimeout: () => {
    console.log(`${who} observed a timeout`);
  },
  showTransfer: (value,outcome) => {
    console.log(`${stdlib.formatCurrency(value)} was transferd to ${outcome == true ? 'Alice' : 'Bob'}`);
  }

});

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...shared('Alice'),
    // implement Alice's interact object here
    inherit: stdlib.parseCurrency(5000),
    getChoice: async () => {

      if  (Math.random() <= 0.1) {
        for (let i = 0 ; i <= 10; i++) {
        console.log('Alice takes her sweet time');
        stdlib.wait(i);
        }
        return false
      }
      const choice = await ask.ask(
      'Are you still there?',
      ask.yesno
      );
      console.log(`Alice's choice is ${choiceArray[choice ? 1 : 0]}`);
      return choice;
    },
    deadline: 10,
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...shared('Bob'),
    // implement Bob's interact object here
    acceptTerms: async (num) => {
      if  (Math.random() <= 0.1) {
        for (let i = 0 ; i <= 10; i++) {
        console.log('Bob takes his sweet time');
        stdlib.wait(i);
        }
        return false

      }
      const accept = await ask.ask(
      'Do you accept the terms?',
      ask.yesno
      );
      console.log(`Bob accepts the terms of the Vault for ${stdlib.formatCurrency(num)}`);
      return accept;
    },
    }),
]);
ask.done();

console.log(`Alice's balance after is: ${await getBalance(accAlice)}`);
console.log(`Bobs's balance after is: ${await getBalance(accBob)}`);
console.log('Goodbye, Alice and Bob!');
