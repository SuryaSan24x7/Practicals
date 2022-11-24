// scripts/index.js
async function main () {
  // Our code will go here
  const accounts = await ethers.provider.listAccounts();
console.log(accounts);
const address = '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9';
const Box = await ethers.getContractFactory('Box');
const box = await Box.attach(address);
const value = await box.retrieve();
console.log('Box value is', value.toString());
await box.store(99);

// Call the retrieve() function of the deployed Box contract
const value1 = await box.retrieve();
console.log('Box value is', value1.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });