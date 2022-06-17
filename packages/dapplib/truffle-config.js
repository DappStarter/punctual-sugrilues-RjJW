require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind huge guess nation force type'; 
let testAccounts = [
"0xbe921d0ff27f0c8e0194dcf26f2a3d1abc13d17bace2a67e72ff818a9c0799ea",
"0xbc2521c0cb5207837859225490215e99c6dbe291fcffc15bf44acf75cbb3c27c",
"0x6570295fe8c3dd06a7f949fbdc1b1a9ffe7d584ab34e26a91e82ff891b19f81f",
"0xbab3a89cf74e28f16255365cbff3b89d49ccd731aed05e6b87bf6bac8f092a3c",
"0x911feeec6bf405bcc15b60327f3c09f88162d0bbeca9aba739d5a6d02779a3e2",
"0x69b75db667b1a94fc025ac7ac55e38a60cfcc0937162173fac523580fc73763b",
"0xfda140c3e65bd2ed7543b096b521cf7450640f3ed71ebf61f7b42d40b4a7b54a",
"0x584f7f7b7908dad5b454414065c5f4df7df317924df2c02e03397d610e7ebf8b",
"0x590c15a37141456cfdd5c3d930090b85ea689be4862ff77cc177fac14eae5252",
"0x2d5f1abf3cd77d996c22e760f23c8e813e147696c49fbda2a5877b2383d9f386"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


