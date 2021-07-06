require('@nomiclabs/hardhat-ethers')
const env = require('./.env.json')

INFURO_API_KEY = env.INFURO
PRIV = env.PRIVATE_KEY
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.5.16',
    settings: {
      evmVersion: 'istanbul',
      optimizer: {
        enabled: true,
        runs: 999999
      }
    }
  },
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURO_API_KEY}`,
      accounts: [`0x${PRIV}`]
    }
  }
}
