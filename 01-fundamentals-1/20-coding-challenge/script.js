const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Total ${bill + tip}. Bill: ${bill}, Tip: ${tip}`);
