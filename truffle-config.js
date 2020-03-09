require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name repeat noble hole just arctic slot giggle'; 
let testAccounts = [
"0xa2271dbbc0363c8c1f20166436344423d6d3dfc360c03e41a05a5a89e1156edf",
"0x2dbfc4fabd58acfc7d08a4e47445a6de3b4382d651967e91c8050c0acfceb5f7",
"0x0bce3187e1d07b185abb0a132cf135021001871de54c819ed1fbd7165289db38",
"0x02e48698e7afe4ceb5e81f71b5a0fb5e8f9d3877579ef5442dbdb23854926afb",
"0xd221fc21a49b1bba5001f95cf87de4bea603285cd96ffcf633cf30987c238322",
"0x57f583d304792063c13964579d138f53a23a7ecae8f6fa1fd96d5739624cfbba",
"0xdc127f31e2a27688e04099692e7ccbd8393977d7e6ca04cad144ce7a4390be5b",
"0x0ab231f05e822b6d76a2b99c44ce72558c37ecc9799849ff45c4e2b232902451",
"0xb2f4308b00b28527d6185b05d702da2a48bc0a1dc217d9bfbb3a442d475568a3",
"0x775ba3559bb6351b59a51ba8a5e9ceb352a3ad91c29f4c9dd027eb6742070697"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
