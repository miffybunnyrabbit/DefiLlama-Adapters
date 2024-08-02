const { sumTokensExport } = require('../helper/unwrapLPs')
const PEPE_TOKEN_CONTRACT = '0x6982508145454Ce325dDbE47a25d4ec3d2311933';
const LOCKED_MONEY_CONTRACT = '0x30F75834cB406b7093208Fda7F689938aCBD1EeB'; //wallet that has all the locked money

module.exports = {
  methodology: 'Counts all the tokens being used as collateral of CDPs.',
  ethereum: {
    tvl: sumTokensExport({ owner: LOCKED_MONEY_CONTRACT, token: PEPE_TOKEN_CONTRACT}),
  }
}; 
