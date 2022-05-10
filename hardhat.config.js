require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.10',
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/5JfH5LFyzaditPJgl_qHnPp_cHkwRT-_',
      accounts: [
        '95bb78de821399517731331cab073b3517156bb2fe4e2f2c60f2da989663b704',
      ],
    },
  },
}
