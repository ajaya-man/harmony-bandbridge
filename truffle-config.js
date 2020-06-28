/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
require('dotenv').config()
const { TruffleProvider } = require('@harmony-js/core')

//Testnet
const testnet_mnemonic = process.env.TESTNET_MNEMONIC
const testnet_private_key = process.env.TESTNET_PRIVATE_KEY
const testnet_url = process.env.TESTNET_0_URL
const testnet_0_url = process.env.TESTNET_0_URL
const testnet_1_url = process.env.TESTNET_1_URL

//GAS - Currently using same GAS accross all environments
gasLimit = process.env.GAS_LIMIT
gasPrice = process.env.GAS_PRICE


module.exports = {
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.14",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  networks: {
    testnet: {
      network_id: '2',
      provider: () => {
        const truffleProvider = new TruffleProvider(
          testnet_url,
          { memonic: testnet_mnemonic },
          { shardID: 0, chainId: 2 },
          { gasLimit: gasLimit, gasPrice: gasPrice},
        );
        const newAcc = truffleProvider.addByPrivateKey(testnet_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
    },
    testnet0: {
      network_id: '2', 
      provider: () => {
        const truffleProvider = new TruffleProvider(
          testnet_0_url,
          { memonic: testnet_mnemonic },
          { shardID: 0, chainId: 2 },
          { gasLimit: gasLimit, gasPrice: gasPrice },
        );
        const newAcc = truffleProvider.addByPrivateKey(testnet_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
    },
    testnet1: {
      network_id: '2', 
      provider: () => {
        const truffleProvider = new TruffleProvider(
          testnet_1_url,
          { memonic: testnet_mnemonic },
          { shardID: 1, chainId: 2 },
          { gasLimit: gasLimit, gasPrice: gasPrice },
        );
        const newAcc = truffleProvider.addByPrivateKey(testnet_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
    }
  }
};
