async function main() {
  let [feeToSetter] = await ethers.getSigners();
  let Factory = await ethers.getContractFactory('PancakeFactory');
  let factory = await Factory.deploy(feeToSetter.address);
  console.log('Factory:', factory.address);
  console.log('INIT_CODE_HASH', await factory.INIT_CODE_PAIR_HASH());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })