import BigNumber from 'bignumber.js'

const BITCOIN_CONST = Math.pow(10,8).toString()
const ETHEREUM_CONST = Math.pow(10,18).toString()

export function convertSatoshiToBtc(bigNum) {
  const btc = new BigNumber(BITCOIN_CONST)
  return new BigNumber(bigNum.toString()).dividedBy(btc).toString();
}

export function convertBtcToSatoshi(bigNum) {
  const btc = new BigNumber(BITCOIN_CONST)
  return new BigNumber(bigNum.toString()).times(btc).toString();
}

export function convertWeiToEth(bigNum) {
  const eth = new BigNumber(ETHEREUM_CONST)
  return new BigNumber(bigNum.toString()).dividedBy(eth).toString();
}

export function convertEthToWei(bigNum) {
  const eth = new BigNumber(ETHEREUM_CONST)
  return new BigNumber(bigNum.toString()).times(eth).toString();
}
