const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory('Domains')
  const domainContract = await domainContractFactory.deploy('sheep')
  await domainContract.deployed()

  console.log('Contract deployed to:', domainContract.address)

  let txn = await domainContract.register('maneth', {
    value: hre.ethers.utils.parseEther('0.1'),
  })
  await txn.wait()
  console.log('Minted domain maneth.sheep')

  txn = await domainContract.setRecord('maneth', 'https://maneth.me')
  await txn.wait()
  console.log('Set record for maneth.sheep')

  const address = await domainContract.getAddress('maneth')
  console.log('Owner of domain maneth:', address)

  const balance = await hre.ethers.provider.getBalance(domainContract.address)
  console.log('Contract balance:', hre.ethers.utils.formatEther(balance))
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
