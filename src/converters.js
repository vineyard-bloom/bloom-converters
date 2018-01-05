import BigNumber from 'bignumber.js'

const BITCOIN_CONST = Math.pow(10,8).toString()
const ETHEREUM_CONST = Math.pow(10,18).toString()

export function convertSatoshiToBtc(bigNum) {
  const btc = new BigNumber(BITCOIN_CONST)
  return bigNum.dividedBy
    ? bigNum.dividedBy(btc).toString()
    : new BigNumber(bigNum).dividedBy(btc).toString();
}

export function convertBtcToSatoshi(bigNum) {
  const btc = new BigNumber(BITCOIN_CONST)
  return bigNum.times
    ? bigNum.times(btc).toString()
    : new BigNumber(bigNum).times(btc).toString();
}

export function convertWeiToEth(bigNum) {
  const eth = new BigNumber(ETHEREUM_CONST)
  return bigNum.dividedBy
    ? bigNum.dividedBy(eth).toString()
    : new BigNumber(bigNum).dividedBy(eth).toString();
}

export function convertEthToWei(bigNum) {
  const eth = new BigNumber(ETHEREUM_CONST)
  return bigNum.times
    ? bigNum.times(eth).toString()
    : new BigNumber(bigNum).times(eth).toString();
}
